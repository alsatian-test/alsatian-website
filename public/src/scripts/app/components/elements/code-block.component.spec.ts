import { Any, Expect, SpyOn, Test, TestCase, TestFixture } from "alsatian";
import CodeBlock from "./code-block.component";
import "prismjs";

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
    public lineNumbersClassAdded() {
        const codeBlock = new CodeBlock({ 
            children: "",
            language: "typescript",
            showLineNumbers: true
        });

        Expect(codeBlock.render().props.className).toBe("line-numbers language-typescript");
    }

    @Test("prism complete callback not called before render")
    public prismCallbackNotCalledBeforeRender() {
        const codeBlock = new CodeBlock({ 
            children: "",
            language: "typescript"
        });

        SpyOn(Prism.hooks, "run");

        codeBlock.componentDidMount();

        Expect(Prism.hooks.run).not.toHaveBeenCalled();
    }

    @Test("prism complete callback is called after render")
    public prismCallbackCalledAfterRender() {
        const codeBlock = new CodeBlock({ 
            children: "",
            language: "typescript"
        });

        SpyOn(Prism.hooks, "run");

        codeBlock.render().props.children.ref({});

        codeBlock.componentDidMount();

        Expect(Prism.hooks.run).toHaveBeenCalledWith("complete", Any(Object));
    }

    @TestCase("some code")
    @TestCase("much more fancy logic")
    @Test("prism complete callback is called with code")
    public prismCallbackCalledWithCode(code: string) {
        const codeBlock = new CodeBlock({ 
            children: code,
            language: "typescript"
        });

        SpyOn(Prism.hooks, "run");

        codeBlock.render().props.children.ref({});

        codeBlock.componentDidMount();

        Expect((Prism.hooks.run as any).calls[0].args[1].code).toBe(code);
    }

    @TestCase({ fake: "codeElement" })
    @TestCase({ something: "much", more: "interesting" })
    @Test("prism complete callback is called with code element")
    public prismCallbackCalledWithCodeElement(codeElement: any) {
        const codeBlock = new CodeBlock({ 
            children: "",
            language: "typescript"
        });

        SpyOn(Prism.hooks, "run");

        codeBlock.render().props.children.ref(codeElement);

        codeBlock.componentDidMount();

        Expect((Prism.hooks.run as any).calls[0].args[1].element).toBe(codeElement);
    }
}
