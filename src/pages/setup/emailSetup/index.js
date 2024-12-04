import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import EmailSetup from '../../../components/setup/emailSetup/EmailSetup';

function EmailSetupPage() {
  const breadCrumbsTitle = {
    title_1: "Email Setup",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <EmailSetup />
    </>
  );
}

export default EmailSetupPage
