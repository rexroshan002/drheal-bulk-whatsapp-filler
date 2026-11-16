<div align="center">
  <img src="./logo.jpeg" alt="REX — Dr. Heal Bulk WhatsApp Filler" width="150" />

  <h1>REX · Dr. Heal Bulk WhatsApp Filler</h1>
  <p><strong>A focused Chrome assistant for preparing Dr. Heal Bulk WhatsApp forms.</strong></p>
  <p>Fill appointment templates across tabs, or turn pasted Excel rows into recipient entries—with a live preview before you act.</p>

  <p>
    <img src="https://img.shields.io/badge/Chrome-Manifest%20V3-4285F4?logo=googlechrome&logoColor=white" alt="Chrome Manifest V3" />
    <img src="https://img.shields.io/badge/Portal-drheal.in-B91C1C" alt="Works with drheal.in" />
    <img src="https://img.shields.io/badge/Language-English%20%26%20Kannada-7F1D1D" alt="English and Kannada templates" />
  </p>
</div>

---

## ✦ At a glance

REX is a lightweight **Manifest V3 Chrome extension** that helps prepare Bulk WhatsApp Message forms in Dr. Heal’s Frappe portal. Choose a ready-made message type, review the generated values, and fill the active form—or distribute selected appointment slots across matching form tabs in the current window.

> **Designed for a deliberate workflow:** review the payload preview and confirm the correct portal form before filling it. REX populates form fields; it does not send WhatsApp messages.

## ✨ Features

- **Common templates:** first-visit messages in English or Kannada, senior-doctor follow-ups, and First Come, First Serve (FCFS) templates.
- **Branch-aware details:** HSR Layout and Banashankari (BSK) addresses and map links are included in the generated payload.
- **Appointment slots:** select from hourly slots from 7 AM through 6 PM; use one slot for the active tab or assign selected slots to matching tabs in the current window.
- **Automatic dates:** English and Kannada date fields default to the following day and can be edited before filling.
- **Unique Token workflow:** paste Time, Token No, and Mobile columns from Excel to create a preview of recipient rows for the active form.
- **Live JSON preview:** inspect the template variables or recipient data before applying them.

## 🚀 Install the extension

1. Download or clone this repository to your computer.
2. In Chrome, open [`chrome://extensions`](chrome://extensions).
3. Turn on **Developer mode**.
4. Select **Load unpacked** and choose the folder containing `manifest.json`.
5. Open a Dr. Heal Bulk WhatsApp Message form on `drheal.in`, then click the REX extension icon.

To update after changing the extension files, return to `chrome://extensions` and click the extension’s **Reload** button.

## 🧭 How to use

### Common (Multi-Tab)

1. Open one or more Bulk WhatsApp Message forms in the **same Chrome window**.
2. Choose a branch and template type. Set the dates, template name, and variable type if needed.
3. Select one or more appointment slots. Check **Payload Preview** to confirm the title and template variables.
4. Choose **Fill Current Tab** to fill the active page, or **Fill Window Tabs** to fill matching form tabs in the current window.

When filling multiple tabs, selected slots are assigned in order to matching forms in tab order. If there are more selected slots than matching tabs, only the available forms are filled; extra slots are not used.

### Unique Token (Excel Rows)

1. Open the Bulk WhatsApp Message form you want to populate and select the **Unique Token** tab in the extension.
2. Set the branch, appointment date, doctor name, template name, and form title as appropriate.
3. Paste rows with **Time | Token No | Mobile** columns. Tab-separated Excel rows are supported; rows separated by commas or multiple spaces are also accepted.
4. Review the recipient preview and select **Fill Recipients in Current Tab**.

This mode fills the recipient table on the active page. Rows without a usable mobile number or the expected three columns are skipped.

## 🔐 Permissions and scope

The extension requests Chrome’s `tabs` and `scripting` permissions and host access to `drheal.in` pages. These are used to find matching tabs in the current window and fill the open portal form. The extension does not need access to unrelated websites.

## 🛠️ Project files

| File | Purpose |
| --- | --- |
| `manifest.json` | Manifest V3 metadata, extension icon, permissions, and popup configuration |
| `popup.html` | Extension popup interface and styling |
| `popup.js` | Template generation, previews, tab selection, and form filling |
| `logo.jpeg` | REX logo used by the extension |

## ⚠️ Notes

- This extension is intended for Dr. Heal’s Frappe portal and matching Bulk WhatsApp Message forms.
- The portal must be open and the relevant form should be loaded before you use a fill action.
- Always verify the branch, date, template, recipients, and generated message data in the portal before proceeding with any separate send action.
- Portal field names or layouts may change; if filling stops working, confirm the portal form’s current structure.

---

<div align="center">
  <sub>Built for a clearer, more consistent form-filling workflow · REX</sub>
</div>
