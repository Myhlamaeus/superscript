import characterRange from "character-range";
import mapCharacters from "map-characters";

const toSuperscript = Object.freeze(Object.assign(function toSuperscript(string) {
            return mapCharacters(string, toSuperscript.symbols);
        }, {
            "symbols": {
                "0": "\u2070",
                "1": "\u00B9",
                "-": "\u207B",
                "A": "\u1D2C",
                "B": "\u1D2E",
                "P": "\u1D3E",
                "R": "\u1D3F",
                "T": "\u1D40",
                "U": "\u1D41",
                "V": "\u2C7D",
                "W": "\u1D42",
                "a": "\u1D43",
                "b": "\u1D47",
                "c": "\u1D9C",
                "f": "\u1DA0",
                "g": "\u1D4D",
                "h": "\u02B0",
                "i": "\u2071",
                "j": "\u02B2",
                "k": "\u1D4F",
                "l": "\u02E1",
                "m": "\u1D50",
                "n": "\u207F",
                "o": "\u1D52",
                "p": "\u1D56",
                "r": "\u02B3",
                "s": "\u02E2",
                "v": "\u1D5B",
                "w": "\u02B7",
                "x": "\u02E3",
                "y": "\u02B8",
                "z": "\u1DBB",
            }
    })),
    add = function(from, to, offset) {
        const range = characterRange(from, to),
            fromCodePoint = from.charCodeAt(0);

        for(let sym of range) {
            toSuperscript.symbols[sym] = String.fromCodePoint(sym.charCodeAt(0) - fromCodePoint + offset);
        }
    };

add("2", "3", 0x00B2);
add("4", "9", 0x2074);
add("(", ")", 0x207D);
add("D", "E", 0x1D30);
add("G", "O", 0x1D33);
add("T", "U", 0x1D40);
add("d", "e", 0x1D48);
add("t", "u", 0x1D57);

Object.freeze(toSuperscript.symbols);

export default toSuperscript;
