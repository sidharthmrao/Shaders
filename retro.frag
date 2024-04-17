//
// Retro scanlines shader with green tint.
// 

precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;
uniform vec2 resolution;
uniform float time;

void main() {
    // Sample the texture
    vec4 color = texture2D(tex, v_texcoord);

    // Calculate scanline pattern
    float flicker = .8 - .4 * abs(sin(time * 30.0));
    float scanline = mod(gl_FragCoord.y, 10.0) < 4.0 ? flicker : 1.0;

    // Intensify scanline effect
    color.rgb *= scanline;

    // Apply green tint
    color.r *= 0.5;
    color.g *= 1.5;
    color.b *= 0.5;

    // Output final color
    gl_FragColor = color;
}
