precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
    // Sample the texture
    vec4 color = texture2D(tex, v_texcoord);

    // Apply the neon purple tint with less intensity
    color.rgb += vec3(0.2, 0.0, 0.2); // Adjust the values for desired tint intensity

    // Output final color
    gl_FragColor = color;
}
