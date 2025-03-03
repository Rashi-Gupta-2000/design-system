import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const warningMessage = () => <InlineMessage appearance="warning" description="Inline message goes here." />;

export default {
  title: 'Components/InlineMessage/Variants/Warning Message',
  component: InlineMessage,
};
