/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/#installation/NodgNARATAdAbDAjBSi4GZ0BYqIBxRRxQAMUAnOpQKyKIgnmLVzXlzPlZ17ohYkUEAKYA7FCTDBEYSZJnyAupADGAI0YAzFZoiKgA===
 */

import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  Bold,
  Code,
  Essentials,
  FontColor,
  GeneralHtmlSupport,
  Heading,
  ImageBlock,
  ImageInsert,
  ImageInsertViaUrl,
  ImageToolbar,
  ImageUpload,
  Italic,
  Link,
  LinkImage,
  Paragraph,
  PictureEditing,
  Underline,
} from "ckeditor5";
import {
  AIAssistant,
  OpenAITextAdapter,
  Uploadcare,
  UploadcareImageEdit,
} from "ckeditor5-premium-features";
import { Text, LegacyStack, Button } from "@shopify/polaris";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

import "../../App.css";
import "../../style/Description.css";

const LICENSE_KEY =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTEwNjg3OTksImp0aSI6ImRkZDAyYjUxLWYwMDktNDFkNi1hOGU2LTI1MzI4OTE3MjA1NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjNjMjQwODc4In0.XPYwf52eDCXp6Yu_QXsX-WSiSKI0MiRgmHLYpjLQcqCTqJyzw7Un5Fq6OwD8QoxD9q25SN5jlY9M1oee2JjWoA";

/**
 * USE THIS INTEGRATION METHOD ONLY FOR DEVELOPMENT PURPOSES.
 *
 * This sample is configured to use OpenAI API for handling AI Assistant queries.
 * See: https://ckeditor.com/docs/ckeditor5/latest/features/ai-assistant/ai-assistant-integration.html
 * for a full integration and customization guide.
 */
const AI_API_KEY = "<YOUR_AI_API_KEY>";

/**
 * Create a free account to test Uploadcare with a trial: https://app.uploadcare.com/accounts/signup/
 *
 * If you are interested in using Uploadcare on production, contact us: https://ckeditor.com/contact-sales/
 */
const UPLOADCARE_PUBKEY = "<YOUR_UPLOADCARE_PUBKEY>";

export default function Description() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "aiCommands",
            "aiAssistant",
            "|",
            "heading",
            "|",
            "fontColor",
            "|",
            "bold",
            "italic",
            "underline",
            "code",
            "|",
            "link",
            "insertImage",
            "|",
            "alignment",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          AIAssistant,
          Alignment,
          Autoformat,
          AutoImage,
          AutoLink,
          Autosave,
          Bold,
          Code,
          Essentials,
          FontColor,
          GeneralHtmlSupport,
          Heading,
          ImageBlock,
          ImageInsert,
          ImageInsertViaUrl,
          ImageToolbar,
          ImageUpload,
          Italic,
          Link,
          LinkImage,
          OpenAITextAdapter,
          Paragraph,
          PictureEditing,
          Underline,
          Uploadcare,
          UploadcareImageEdit,
        ],
        ai: {
          openAI: {
            requestHeaders: {
              Authorization: "Bearer " + AI_API_KEY,
            },
          },
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        htmlSupport: {
          allow: [
            {
              name: /^.*$/,
              styles: true,
              attributes: true,
              classes: true,
            },
          ],
        },
        image: {
          toolbar: ["uploadcareImageEdit"],
        },
        initialData:
          '<div class="description_content"><h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n </div>',
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        placeholder: "Type or paste your content here!",
        uploadcare: {
          pubkey: UPLOADCARE_PUBKEY,
        },
      },
    };
  }, [isLayoutReady]);

  useEffect(() => {
    if (editorConfig) {
      configUpdateAlert(editorConfig);
    }
  }, [editorConfig]);

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div ref={editorRef}>
            {editorConfig && (
              <CKEditor editor={ClassicEditor} config={editorConfig} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
  if (configUpdateAlert.configUpdateAlertShown) {
    return;
  }

  const isModifiedByUser = (currentValue, forbiddenValue) => {
    if (currentValue === forbiddenValue) {
      return false;
    }

    if (currentValue === undefined) {
      return false;
    }

    return true;
  };

  const valuesToUpdate = [];

  configUpdateAlert.configUpdateAlertShown = true;

  if (!isModifiedByUser(config.licenseKey, "<YOUR_LICENSE_KEY>")) {
    valuesToUpdate.push("LICENSE_KEY");
  }

  if (
    !isModifiedByUser(
      config.ai?.openAI?.requestHeaders?.Authorization,
      "Bearer <YOUR_AI_API_KEY>"
    )
  ) {
    valuesToUpdate.push("AI_API_KEY");
  }

  if (
    !isModifiedByUser(config.uploadcare?.pubkey, "<YOUR_UPLOADCARE_PUBKEY>")
  ) {
    valuesToUpdate.push("UPLOADCARE_PUBKEY");
  }

  if (valuesToUpdate.length) {
    window.alert(
      [
        "Please update the following values in your editor config",
        "to receive full access to Premium Features:",
        "",
        ...valuesToUpdate.map((value) => ` - ${value}`),
      ].join("\n")
    );
  }
}
