import {
  Page,
  Layout,
  LegacyCard,
  TextField,
  Icon,
  Popover,
  BlockStack,
  Divider,
  Button,
  InlineStack,
  Scrollable,
  Box,
  ActionList,
  TextContainer,
  Text,
  Badge,
  ResourceList,
  List,
  LegacyStack,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";
import {
  CalendarTimeIcon,
  AlertCircleIcon,
  MagicIcon,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  CodeIcon,
  TextAlignLeftIcon,
  LinkIcon,
  ImageIcon,
  MenuHorizontalIcon,
  PlayCircleIcon,
} from "@shopify/polaris-icons";

import Description from "./CKEditor/Description.jsx";

export default function MainSection() {
  const [active, setActive] = useState(true);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleImportedAction = useCallback(
    () => console.log("Imported action"),
    []
  );

  const handleExportedAction = useCallback(
    () => console.log("Exported action"),
    []
  );

  const activator = (
    <Button variant="tertiary" onClick={toggleActive} disclosure>
      Paragraph
    </Button>
  );

  return (
    <Layout>
      <Layout.Section>
        <LegacyCard>
          <LegacyCard.Section>
            <TextField
              label="Title"
              autoComplete="off"
              placeholder="Hipli pakaging"
            />
          </LegacyCard.Section>

          {/* Description section */}
          <LegacyCard.Section title="Description" sectioned>
            <Scrollable style={{ height: "500px" }} shadow focusable>
              <Description />
            </Scrollable>
          </LegacyCard.Section>
          {/* Description section end */}
        </LegacyCard>
      </Layout.Section>
      <Layout.Section variant="oneThird">
        <LegacyCard title="Tags" sectioned>
          <TextField
            label="Status"
            type="number"
            autoComplete="off"
            placeholder="Active"
          />
        </LegacyCard>
        <LegacyCard>
          <LegacyCard.Section
            title="Publishing"
            sectioned
            actions={[
              {
                content: "Manage",
              },
            ]}
          >
            <Badge>
              <InlineStack gap="100" wrap={false}>
                Online Store <Icon source={CalendarTimeIcon} tone="base" />
              </InlineStack>
            </Badge>
          </LegacyCard.Section>
          <Divider borderColor="border" />
          <LegacyCard.Section title="Region catalogs">
            <Badge>Mexico</Badge>
          </LegacyCard.Section>
        </LegacyCard>
        <LegacyCard title="Sales" sectioned>
          <BlockStack gap="100" align="start" inlineAlign="start">
            <p>No recent sales of this product</p>
            <Button variant="plain">View details</Button>
          </BlockStack>
        </LegacyCard>
        <LegacyCard sectioned>
          <Text variant="headingSm" as="h6">
            <InlineStack>
              Product organization
              <Box>
                <Icon source={AlertCircleIcon} tone="base" />
              </Box>
            </InlineStack>
          </Text>
          <TextField label="Type" autoComplete="off" />
          <TextField
            label="Vendor"
            placeholder="Validify 0 Address Validation (Password:)"
            autoComplete="off"
          />
          <TextField label="Collection" autoComplete="off" />
        </LegacyCard>
      </Layout.Section>
    </Layout>
  );
}
