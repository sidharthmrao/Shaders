precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
    // Sample the texture
    vec4 color = texture2D(tex, v_texcoord);

    // Convert to grayscale
    float grayscale = dot(color.rgb, vec3(0.299, 0.587, 0.114));

    // Apply weight to make darker colors shift more towards lighter ones
    grayscale = mix(grayscale, pow(grayscale, 1.2), 0.5);

    // Map grayscale to violet scale
    vec3 black = vec3(0.0); // Black color
    vec3 violet = vec3(.9, 0.0, .9); // Violet color
    vec3 resultColor = mix(black, violet, grayscale);

    // Output final color
    gl_FragColor = vec4(resultColor, color.a);
}
