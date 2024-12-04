import JoditEditor from 'jodit-react'
import React from 'react'
import CustomInputField from '../../../../common/CustomInputField'

function AccountActivaytionMailTemp({ values, errors, touched, handleChange, handleBlur }) {
    return (
        <>
            <div className="col-xl-12 mb-3">
                <label className="form_control">Account Activation - Mail Template</label>
                <CustomInputField
                    type="text"
                    value={values?.subject}
                    hasError={errors.subject && touched.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMsg={errors.subject}
                    id="subject"
                    name="subject"
                    placeholder="{SiteName} - Password changed successfully"
                />
            </div>
            <div className="col-xl-12 mb-3">
                <JoditEditor
                    value={`<h4>Welcome and thank you for registering at {SiteName}<h4>

<p>If you are the creator of the {SiteName} account, please click your activation url:
{VerificationUrl}<p/>

<p>After account confirmation, You can log in by using your username and password by visiting our website.<p>

<h6>Thank you,<h6>
- The {SiteName} Team`}
                    onChange={handleChange}
                    tabIndex={1}
                    config={{
                        readonly: false,
                        toolbarSticky: false,
                        toolbarAdaptive: false,
                        height: 300, // Set height via configuration
                    }}
                />
            </div>
        </>
    )
}

export default AccountActivaytionMailTemp
