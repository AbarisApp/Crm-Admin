import React from 'react'
import CustomInputField from '../../../../common/CustomInputField'
import JoditEditor from 'jodit-react'

function PasswordResetMailTemplet({ values, errors, touched, handleChange, handleBlur }) {
    return (
        <>
            <div className="col-xl-12 mb-3">
                <label className="form_control">Password Reset - Mail Template</label>
                <CustomInputField
                    type="text"
                    value={values?.subject}
                    hasError={errors.subject && touched.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMsg={errors.subject}
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                />
            </div>
            <div className="col-xl-12 mb-3">
                <JoditEditor
                    value={`Hello,<br><br>
Recently your account password has been reset by your request. Please use the new password to log in.<br><br>
<strong>Your New Password:</strong> {NewPassword}<br><br>
You can log in using your username and the new password by visiting our website.<br><br>
Thank you,<br>
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

export default PasswordResetMailTemplet
