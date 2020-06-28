import cx from "classnames"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import light from 'prism-react-renderer/themes/github'
import styles from "./styles.module.css"
import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-groovy");

interface CodeProps {
  language: Language | "groovy";
  code: string;
}

export const Code = ({ code, language }: CodeProps) => {
  console.log(language)
  return (
    <Highlight {...defaultProps} 
      code={code.trim()} 
      // @ts-ignore
      language={language} 
      theme={light}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cx(className, styles.codeBlock)} style={style}>
          <code>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
