import {
  Page,
  Layout,
  FormLayout,
  TextField,
  Badge,
  LegacyCard,
} from "@shopify/polaris";
import MainSection from "./MainSection.jsx";

export default function PageMarkup() {
  return (
    <Page
      backAction={{ content: "Products", url: "#" }}
      title="Hipli pakaging"
      titleMetadata={<Badge tone="success">Paid</Badge>}
      compactTitle
      primaryAction={{ content: "Save", disabled: true }}
      secondaryActions={[
        {
          content: "Duplicate",
          accessibilityLabel: "Secondary action label",
          onAction: () => alert("Duplicate action"),
        },
        {
          content: "View on your store",
          onAction: () => alert("View on your store action"),
        },
      ]}
      actionGroups={[
        {
          title: "Promote",
          actions: [
            {
              content: "Share on Facebook",
              accessibilityLabel: "Individual action label",
              onAction: () => alert("Share on Facebook action"),
            },
          ],
        },
      ]}
      pagination={{
        hasPrevious: true,
        hasNext: true,
      }}
    >
      <MainSection />
    </Page>
  );
}
