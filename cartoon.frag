//
// Cartoon-style shader.
// 

precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;
uniform vec2 texelSize;

void main() {
    // Sample the texture
    vec3 color = texture2D(tex, v_texcoord).rgb;

    // Calculate the gradient of the image
    float gradientX = texture2D(tex, v_texcoord + vec2(texelSize.x, 0)).r - texture2D(tex, v_texcoord - vec2(texelSize.x, 0)).r;
    float gradientY = texture2D(tex, v_texcoord + vec2(0, texelSize.y)).r - texture2D(tex, v_texcoord - vec2(0, texelSize.y)).r;

    // Combine gradients to get an approximation of the edge
    float edge = length(vec2(gradientX, gradientY));

    // Apply thresholding to get binary edge
    edge = step(0.5, edge);

    // Apply color quantization to simplify the colors
    color = floor(color * 10.0) / 10.0;

    // Combine color and edge
    color = mix(color, vec3(0.0), edge);

    // Output final color
    gl_FragColor = vec4(color, 1.0);
}
