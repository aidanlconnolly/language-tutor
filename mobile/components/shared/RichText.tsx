import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

// Lesson content is hand-authored TS shared with the web app, where prose
// fields are rendered via dangerouslySetInnerHTML. They contain a small subset
// of inline HTML — <strong>/<b>, <em>/<i>, <br> (and light nesting like
// <em><strong>). On mobile there's no HTML renderer, so this parses those tags
// into nested React Native <Text> instead of showing the raw tags on screen.

const TOKEN = /(<\/?(?:strong|b|em|i)\s*>|<br\s*\/?>)/gi;

export function RichText({ text, style }: { text: string; style?: StyleProp<TextStyle> }) {
  return <Text style={style}>{parse(text)}</Text>;
}

function parse(input: string): React.ReactNode {
  const parts = input.split(TOKEN);
  const out: React.ReactNode[] = [];
  let bold = 0;
  let italic = 0;
  let key = 0;

  for (const part of parts) {
    if (!part) continue;
    const tag = part.toLowerCase().replace(/\s+/g, "");
    if (tag === "<strong>" || tag === "<b>") { bold++; continue; }
    if (tag === "</strong>" || tag === "</b>") { bold = Math.max(0, bold - 1); continue; }
    if (tag === "<em>" || tag === "<i>") { italic++; continue; }
    if (tag === "</em>" || tag === "</i>") { italic = Math.max(0, italic - 1); continue; }
    if (tag === "<br>" || tag === "<br/>") { out.push("\n"); continue; }

    if (bold || italic) {
      out.push(
        <Text
          key={key++}
          style={{ fontWeight: bold ? "700" : undefined, fontStyle: italic ? "italic" : undefined }}
        >
          {part}
        </Text>
      );
    } else {
      out.push(part);
    }
  }

  return out;
}
