import { Expect, Test, TestCase, TestFixture } from "alsatian";
import CodeBlock from "./code-block.component";

@TestFixture("code block tests")
export class CodeBlockTests {

    @TestCase("some code")
    @TestCase("much more fancy logic")
    @Test("children prop is set to code state")
    public propsChildrenBecomesStateCode(expectedCode: string) {
        const codeBlock = new CodeBlock({ children: expectedCode });

        Expect(codeBlock.state.code).toBe(expectedCode);
    }

    @TestCase("typescript")
    @TestCase("javascript")
    @Test("language class setup on container element")
    public lanuageClassSetupOnContainer(languageName: string) {
        const codeBlock = new CodeBlock({ 
            children: "",
            language: languageName
        });

        Expect(codeBlock.render().props.className).toBe("language-" + languageName);
    }

    @TestCase("typescript")
    @TestCase("javascript")
    @Test("language class setup on code element")
    public lanuageClassSetupOnCode(languageName: string) {
        const codeBlock = new CodeBlock({ 
            children: "",
            language: languageName
        });

        Expect(codeBlock.render().props.children.props.className).toBe("language-" + languageName);
    }

    @Test("line numbers class added")
    public lineNumbersClassAdded(shoul: string) {
        const codeBlock = new CodeBlock({ 
            children: "",
            language: "typescript",
            showLineNumbers: true
        });

        Expect(codeBlock.render().props.className).toBe("line-numbers language-typescript");
    }
}
