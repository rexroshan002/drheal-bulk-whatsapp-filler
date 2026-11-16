const BRANCHES = {
  HSR: {
    enAddr:
      "Dr Heal Pain Cure Hospital, Ganapa arcade, 9th Main Rd, 7th Sector, HSR Layout, Bengaluru, Karnataka 560102",
    knAddr:
      "ಡಾ. ಹೀಲ್ ಪೇನ್ ಕ್ಯೂರ್ ಆಸ್ಪತ್ರೆ, ಗಣಪ ಆರ್ಕೇಡ್, 9ನೇ ಮುಖ್ಯ ರಸ್ತೆ, 7ನೇ ವಲಯ, ಎಚ್‌ಎಸ್‌ಆರ್ ಲೇಔಟ್, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ 560102",
    map: "https://maps.app.goo.gl/gC89c8MQj2SPnHPk7",
  },
  BSK: {
    enAddr: "Banashankari No 208 & 209, 100 feet Outer Ring Rd, Bengaluru",
    knAddr:
      "ಡಾ. ಹೀಲ್ ನೋವು ನಿವಾರಣ ಆಸ್ಪತ್ರೆ , ನಂ. 208 ಮತ್ತು 209, 100 ಅಡಿ ಹೊರವರ್ತುಲ ರಸ್ತೆ, 4ನೇಬ್ಲಾಕ್, ಬನಶಂಕರಿ 3ನೇ ಹಂತ, ಬೆಂಗಳೂರು - 560085.",
    map: "https://maps.app.goo.gl/gYMpciNss1aFdRj49",
  },
};

const SLOTS = [
  {
    label: "7AM to 8AM",
    en: "07:00 AM - 08:00 AM",
    fu: "07:00AM - 08:00AM",
    kn: "ಬೆಳಿಗ್ಗೆ 07:00 - 08:00",
  },
  {
    label: "8AM to 9AM",
    en: "08:00 AM - 09:00 AM",
    fu: "08:00AM - 09:00AM",
    kn: "ಬೆಳಿಗ್ಗೆ 08:00 - 09:00",
  },
  {
    label: "9AM to 10AM",
    en: "09:00 AM - 10:00 AM",
    fu: "09:00AM - 10:00AM",
    kn: "ಬೆಳಿಗ್ಗೆ 09:00 - 10:00",
  },
  {
    label: "10AM to 11AM",
    en: "10:00 AM - 11:00 AM",
    fu: "10:00AM - 11:00AM",
    kn: "ಬೆಳಿಗ್ಗೆ 10:00 - 11:00",
  },
  {
    label: "11AM to 12PM",
    en: "11:00 AM - 12:00 PM",
    fu: "11:00AM - 12:00PM",
    kn: "ಬೆಳಿಗ್ಗೆ 11:00 - ಮಧ್ಯಾಹ್ನ 12:00",
  },
  {
    label: "12PM to 1PM",
    en: "12:00 PM - 01:00 PM",
    fu: "12:00PM - 01:00PM",
    kn: "ಮಧ್ಯಾಹ್ನ 12:00 - 01:00",
  },
  {
    label: "1PM to 2PM",
    en: "01:00 PM - 02:00 PM",
    fu: "01:00PM - 02:00PM",
    kn: "ಮಧ್ಯಾಹ್ನ 01:00 - 02:00",
  },
  {
    label: "2PM to 3PM",
    en: "02:00 PM - 03:00 PM",
    fu: "02:00PM - 03:00PM",
    kn: "ಮಧ್ಯಾಹ್ನ 02:00 - 03:00",
  },
  {
    label: "3PM to 4PM",
    en: "03:00 PM - 04:00 PM",
    fu: "03:00PM - 04:00PM",
    kn: "ಮಧ್ಯಾಹ್ನ 03:00 - 04:00",
  },
  {
    label: "4PM to 5PM",
    en: "04:00 PM - 05:00 PM",
    fu: "04:00PM - 05:00PM",
    kn: "ಮಧ್ಯಾಹ್ನ 04:00 - 05:00",
  },
  {
    label: "5PM to 6PM",
    en: "05:00 PM - 06:00 PM",
    fu: "05:00PM - 06:00PM",
    kn: "ಮಧ್ಯಾಹ್ನ 05:00 - 06:00",
  },
];

const KN_MONTHS = [
  "ಜನವರಿ",
  "ಫೆಬ್ರವರಿ",
  "ಮಾರ್ಚ್",
  "ಏಪ್ರಿಲ್",
  "ಮೇ",
  "ಜೂನ್",
  "ಜುಲೈ",
  "ಆಗಸ್ಟ್",
  "ಸೆಪ್ಟೆಂಬರ್",
  "ಅಕ್ಟೋಬರ್",
  "ನವೆಂಬರ್",
  "ಡಿಸೆಂಬರ್",
];

let previewMode = "single";

function getDefaultDates() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return {
    en: `${dd}-${mm}-${yyyy}`,
    kn: `${d.getDate()} ${KN_MONTHS[d.getMonth()]} ${yyyy}`,
  };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ==========================================
// SERVICE 1: COMMON MULTI-TAB LOGIC
// ==========================================
function buildPayload(slotObj) {
  const branch = document.getElementById("branch").value;
  const category = document.getElementById("category").value;
  const dateEn = document.getElementById("dateEn").value.trim();
  const dateKn = document.getElementById("dateKn").value.trim();
  const bInfo = BRANCHES[branch];

  let title = "";
  let varsObj = {};

  if (category === "first_en") {
    title = `${branch} - ${slotObj.label}`;
    varsObj = { 1: dateEn, 2: slotObj.en, 3: bInfo.enAddr, 4: bInfo.map };
  } else if (category === "first_kn") {
    title = `${branch}(kan) - ${slotObj.label}`;
    varsObj = { 1: dateKn, 2: slotObj.kn, 3: bInfo.knAddr, 4: bInfo.map };
  } else if (category === "followup") {
    title = `${branch} - followup - ${slotObj.label}`;
    varsObj = {
      1: "Senior Doctors ",
      2: dateEn,
      3: slotObj.fu,
      4: bInfo.enAddr,
      5: bInfo.map,
    };
  } else if (category === "fcfs_en") {
    title = `${branch} - First Come First Serve`;
    varsObj = {
      1: dateEn,
      2: "_First Come, First Serve_",
      3: bInfo.enAddr,
      4: bInfo.map,
    };
  } else if (category === "fcfs_kn") {
    title = `${branch}(kan) - First Come First Serve`;
    varsObj = {
      1: dateKn,
      2: "ಮೊದಲು ಬಂದವರಿಗೆ, ಮೊದಲ ಸೇವೆ",
      3: bInfo.knAddr,
      4: bInfo.map,
    };
  }

  return {
    title,
    useTemplate: true,
    templateName: document.getElementById("templateName").value.trim(),
    variableType: document.getElementById("variableType").value.trim(),
    templateVars: JSON.stringify(varsObj, null, 2),
  };
}

function syncTemplateName() {
  const category = document.getElementById("category").value;
  const tplInput = document.getElementById("templateName");
  if (category === "first_en" || category === "fcfs_en") {
    tplInput.value = "confimation2_new-";
  } else if (category === "first_kn" || category === "fcfs_kn") {
    tplInput.value = "confimation_new_kan";
  } else if (category === "followup") {
    tplInput.value = "followup_confirmation";
  }
}

function getSelectedSlots() {
  const checked = [...document.querySelectorAll(".slot-cb:checked")].map(
    (cb) => SLOTS[Number(cb.value)],
  );
  return checked.length ? checked : [SLOTS[0]];
}

function refreshUI() {
  const allBoxes = [...document.querySelectorAll(".slot-cb")];
  allBoxes.forEach((cb) => {
    cb.closest(".slot-checkbox-card").classList.toggle("active", cb.checked);
  });

  const selectedSlots = getSelectedSlots();
  const checkedCount = allBoxes.filter((cb) => cb.checked).length;

  document.getElementById("selectedCountBadge").textContent =
    checkedCount === 1
      ? "1 Slot Selected"
      : `${checkedCount || 1} Slots Selected`;

  const allChecked = allBoxes.every((cb) => cb.checked);
  document.getElementById("toggleAllSlots").textContent = allChecked
    ? "Clear All"
    : "Select All";

  const slotsToRender =
    previewMode === "single" ? [selectedSlots[0]] : selectedSlots;

  const previewContainer = document.getElementById("previewContainer");
  previewContainer.innerHTML = slotsToRender
    .map((slot, idx) => {
      const payload = buildPayload(slot);
      return `
        <div class="preview-block">
          <div class="preview-block-header">
            <span class="tab-badge">TAB ${idx + 1}</span>
            <span class="tab-title-text">${escapeHtml(payload.title)}</span>
          </div>
          <pre class="json-code">${escapeHtml(payload.templateVars)}</pre>
        </div>
      `;
    })
    .join("");
}

function setPreviewMode(mode) {
  previewMode = mode;
  document
    .getElementById("modeSingle")
    .classList.toggle("active", mode === "single");
  document
    .getElementById("modeMulti")
    .classList.toggle("active", mode === "multi");
  refreshUI();
}

// ==========================================
// SERVICE 2: UNIQUE TOKEN & RECIPIENT ROWS
// ==========================================
function formatExcelTimeWindow(rawTime) {
  const cleaned = rawTime.trim();
  // If user already pasted a range like "11:30:00 AM - 12:30PM", keep it as-is
  if (cleaned.includes("-")) return cleaned;

  // Match 24-hour or 12-hour single time like "11:30:00" or "13:30:00" or "11:30"
  const match = cleaned.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?$/i);
  if (!match) return cleaned;

  let hour = parseInt(match[1], 10);
  const min = match[2];
  const sec = match[3] || "00";
  const mer = match[4] ? match[4].toUpperCase() : null;

  if (mer === "PM" && hour < 12) hour += 12;
  if (mer === "AM" && hour === 12) hour = 0;

  const formatStart = (h24, m, s) => {
    const suffix = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    return `${String(h12).padStart(2, "0")}:${m}:${s} ${suffix}`;
  };

  const formatEnd = (h24, m) => {
    const suffix = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    return `${String(h12).padStart(2, "0")}:${m}${suffix}`;
  };

  const endHour = (hour + 1) % 24;
  return `${formatStart(hour, min, sec)} - ${formatEnd(endHour, min)}`;
}

function parseUniqueRows() {
  const raw = document.getElementById("excelPaste").value.trim();
  if (!raw) return [];

  const branch = document.getElementById("uBranch").value;
  const dateStr = document.getElementById("uDate").value.trim();
  const doctorName = document.getElementById("uDoctor").value; // Keep trailing space if user has it
  const bInfo = BRANCHES[branch];

  const lines = raw.split(/\r?\n/).filter((l) => l.trim());
  const rows = [];

  for (const line of lines) {
    // Split by tab (Excel copy-paste) or 2+ spaces/comma
    const parts = line.includes("\t")
      ? line.split("\t").map((s) => s.trim())
      : line.split(/\s{2,}|,/).map((s) => s.trim());

    if (parts.length < 3) continue;
    const [rawTime, rawToken, rawMobile] = parts;

    // Skip header row if pasted (e.g. "Time | TOKEN NO | Mobile No")
    if (/mobile|token/i.test(rawMobile) || /token/i.test(rawToken)) continue;

    const mobile = rawMobile.replace(/\D/g, "");
    if (!mobile) continue;

    const timeRange = formatExcelTimeWindow(rawTime);
    const jsonPayload = {
      1: doctorName,
      2: dateStr,
      3: `${timeRange} || Token No: ${rawToken}`,
      4: bInfo.enAddr,
      5: bInfo.map,
    };

    rows.push({
      mobile,
      token: rawToken,
      recipientData: JSON.stringify(jsonPayload, null, 2),
    });
  }

  return rows;
}

function refreshUniquePreview() {
  const rows = parseUniqueRows();
  const activePaneIsUnique = document
    .getElementById("uniquePane")
    .classList.contains("active");

  document.getElementById("uRowCount").textContent =
    `${rows.length} Row(s) Ready`;
  if (activePaneIsUnique) {
    document.getElementById("selectedCountBadge").textContent =
      `${rows.length} Row(s)`;
  }

  const container = document.getElementById("uPreviewContainer");
  if (!rows.length) {
    container.innerHTML = `<div class="json-code" style="color:#94a3b8;">Paste 3 columns from Excel (Time, Token No, Mobile No) above to preview...</div>`;
    return;
  }

  container.innerHTML = rows
    .slice(0, 25) // Render up to 25 blocks smoothly in preview
    .map(
      (r, idx) => `
      <div class="preview-block">
        <div class="preview-block-header">
          <span class="tab-badge">ROW ${idx + 1} • TOKEN ${escapeHtml(r.token)}</span>
          <span class="tab-title-text">${escapeHtml(r.mobile)}</span>
        </div>
        <pre class="json-code">${escapeHtml(r.recipientData)}</pre>
      </div>
    `,
    )
    .join("");
}

// ==========================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const dates = getDefaultDates();
  document.getElementById("dateEn").value = dates.en;
  document.getElementById("dateKn").value = dates.kn;
  document.getElementById("uDate").value = dates.en;

  // Service Switcher Tabs
  document.querySelectorAll(".service-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".service-tab")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".view-pane")
        .forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");

      if (targetId === "uniquePane") refreshUniquePreview();
      else refreshUI();
    });
  });

  // Populate Service 1 Slots
  const container = document.getElementById("slotsContainer");
  SLOTS.forEach((slot, idx) => {
    const label = document.createElement("label");
    label.className = `slot-checkbox-card ${idx === 0 ? "active" : ""}`;
    label.innerHTML = `<input type="checkbox" class="slot-cb" value="${idx}" ${idx === 0 ? "checked" : ""}> <span>${slot.label}</span>`;
    container.appendChild(label);
  });

  syncTemplateName();
  refreshUI();
  refreshUniquePreview();

  // Service 1 Listeners
  document
    .getElementById("modeSingle")
    .addEventListener("click", () => setPreviewMode("single"));
  document
    .getElementById("modeMulti")
    .addEventListener("click", () => setPreviewMode("multi"));

  document.getElementById("toggleAllSlots").addEventListener("click", () => {
    const allBoxes = [...document.querySelectorAll(".slot-cb")];
    const shouldCheck = !allBoxes.every((cb) => cb.checked);
    allBoxes.forEach((cb) => {
      cb.checked = shouldCheck;
    });
    if (shouldCheck) setPreviewMode("multi");
    else refreshUI();
  });

  document.getElementById("category").addEventListener("change", () => {
    syncTemplateName();
    refreshUI();
  });

  ["branch", "dateEn", "dateKn", "templateName", "variableType"].forEach(
    (id) => {
      document.getElementById(id).addEventListener("input", refreshUI);
    },
  );

  container.addEventListener("change", () => {
    const checkedCount = document.querySelectorAll(".slot-cb:checked").length;
    if (checkedCount > 1 && previewMode === "single") {
      setPreviewMode("multi");
    } else {
      refreshUI();
    }
  });

  // Service 2 Listeners
  ["uBranch", "uDate", "uDoctor", "uTemplate", "excelPaste"].forEach((id) => {
    document.getElementById(id).addEventListener("input", refreshUniquePreview);
  });

  document.getElementById("uBranch").addEventListener("change", () => {
    const b = document.getElementById("uBranch").value;
    const docName = document.getElementById("uDoctor").value.trim();
    document.getElementById("uTitle").value = `${b} - ${docName}`;
  });

  document.getElementById("clearPaste").addEventListener("click", () => {
    document.getElementById("excelPaste").value = "";
    refreshUniquePreview();
  });
});

// ==========================================
// INJECTED PAGE FUNCTIONS (MAIN WORLD)
// ==========================================
function fillFrappeBulkForm(data) {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function setNativeInput(selector, value) {
    const el = document.querySelector(selector);
    if (!el) return false;
    el.focus();
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    )?.set;
    if (setter) setter.call(el, value);
    else el.value = value;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    el.blur();
    return true;
  }

  (async () => {
    if (window.cur_frm) {
      try {
        for (const df of cur_frm.meta.fields) {
          if (df.label === "Title" || df.fieldname === "title") {
            await cur_frm.set_value(df.fieldname, data.title);
          }
        }
      } catch (e) {}
    }
    setNativeInput(
      'div[data-fieldname="title"] input, input[data-fieldname="title"]',
      data.title,
    );

    await sleep(150);

    if (window.cur_frm) {
      try {
        for (const df of cur_frm.meta.fields) {
          if (df.label === "Use Template" || df.fieldname === "use_template") {
            await cur_frm.set_value(df.fieldname, data.useTemplate ? 1 : 0);
          }
        }
      } catch (e) {}
    }
    const checkbox = document.querySelector(
      'div[data-fieldname="use_template"] input[type="checkbox"], input[data-fieldname="use_template"]',
    );
    if (checkbox && checkbox.checked !== data.useTemplate) {
      checkbox.click();
      checkbox.dispatchEvent(new Event("change", { bubbles: true }));
    }

    await sleep(350);

    if (window.cur_frm) {
      try {
        for (const df of cur_frm.meta.fields) {
          if (df.label === "Template" || df.fieldname === "template") {
            await cur_frm.set_value(df.fieldname, data.templateName);
          }
          if (
            df.label === "Variable Type" ||
            df.fieldname === "variable_type"
          ) {
            await cur_frm.set_value(df.fieldname, data.variableType);
          }
        }
      } catch (e) {}
    }
    setNativeInput(
      'div[data-fieldname="template"] input, input[data-fieldname="template"]',
      data.templateName,
    );

    await sleep(200);

    let varsSet = false;
    if (window.cur_frm) {
      try {
        for (const df of cur_frm.meta.fields) {
          if (
            df.label === "Template Variables" ||
            df.fieldname === "template_variables"
          ) {
            await cur_frm.set_value(df.fieldname, data.templateVars);
            const fieldObj = cur_frm.fields_dict[df.fieldname];
            if (fieldObj && fieldObj.editor) {
              fieldObj.editor.setValue(data.templateVars, -1);
            }
            varsSet = true;
          }
        }
      } catch (e) {}
    }

    if (!varsSet) {
      const aceEl = document.querySelector(
        'div[data-fieldname="template_variables"] .ace_editor, .ace_editor',
      );
      if (aceEl && window.ace) {
        const editor = window.ace.edit(aceEl);
        editor.setValue(data.templateVars, -1);
      }
      const textarea = document.querySelector(
        'div[data-fieldname="template_variables"] textarea',
      );
      if (textarea) {
        textarea.value = data.templateVars;
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
        textarea.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  })();

  return true;
}

// Service 2 Injected Function: Fills Title, Use Template, Template, Variable Type="Unique", and Recipients Child Table
function fillFrappeUniqueRecipients(payload) {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  (async () => {
    if (!window.cur_frm) return;

    // 1. Set Title
    for (const df of cur_frm.meta.fields) {
      if (df.label === "Title" || df.fieldname === "title") {
        await cur_frm.set_value(df.fieldname, payload.title);
      }
    }
    await sleep(120);

    // 2. Check "Use Template"
    for (const df of cur_frm.meta.fields) {
      if (df.label === "Use Template" || df.fieldname === "use_template") {
        await cur_frm.set_value(df.fieldname, 1);
      }
    }
    await sleep(250);

    // 3. Set Template Name and Variable Type = "Unique"
    for (const df of cur_frm.meta.fields) {
      if (df.label === "Template" || df.fieldname === "template") {
        await cur_frm.set_value(df.fieldname, payload.templateName);
      }
      if (df.label === "Variable Type" || df.fieldname === "variable_type") {
        await cur_frm.set_value(df.fieldname, "Unique");
      }
    }
    await sleep(250);

    // 4. Find the Recipients child table fieldname & its columns dynamically
    const tableField = cur_frm.meta.fields.find(
      (df) =>
        df.fieldtype === "Table" &&
        (df.label === "Recipients" || df.fieldname === "recipients"),
    );
    if (!tableField) return;

    const tableName = tableField.fieldname;
    const grid = cur_frm.fields_dict[tableName]?.grid;

    let mobileCol = "mobile_number";
    let dataCol = "recipient_data";

    if (grid && grid.docfields) {
      const mField = grid.docfields.find(
        (f) =>
          f.label === "Mobile Number" ||
          f.fieldname.includes("mobile") ||
          f.fieldname.includes("phone"),
      );
      const dField = grid.docfields.find(
        (f) =>
          f.label === "Recipient Data" ||
          f.fieldname.includes("data") ||
          f.fieldname.includes("variable"),
      );
      if (mField) mobileCol = mField.fieldname;
      if (dField) dataCol = dField.fieldname;
    }

    // Clear existing empty rows and populate all Excel rows
    cur_frm.clear_table(tableName);

    for (const item of payload.rows) {
      const row = cur_frm.add_child(tableName);
      row[mobileCol] = item.mobile;
      row[dataCol] = item.recipientData;
    }

    cur_frm.refresh_field(tableName);
  })();

  return true;
}

// ==========================================
// BUTTON CLICK HANDLERS
// ==========================================
document.getElementById("fillCurrent").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;

  const payload = buildPayload(getSelectedSlots()[0]);
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    world: "MAIN",
    func: fillFrappeBulkForm,
    args: [payload],
  });

  document.getElementById("status").textContent = `✓ Filled: ${payload.title}`;
});

document.getElementById("fillAll").addEventListener("click", async () => {
  const fillAllBtn = document.getElementById("fillAll");
  fillAllBtn.disabled = true;

  try {
    const allWindowTabs = await chrome.tabs.query({
      currentWindow: true,
      url: "*://*.drheal.in/*",
    });

    const tabs = allWindowTabs.filter(
      (t) =>
        t.url &&
        (t.url.includes("bulk-whatsapp-message") ||
          t.url.toLowerCase().includes("bulk%20whatsapp%20message")) &&
        !t.url.endsWith("/bulk-whatsapp-message") &&
        !t.url.endsWith("/bulk-whatsapp-message/"),
    );

    if (!tabs.length) {
      document.getElementById("status").textContent =
        "No Bulk WhatsApp form tabs found in this window.";
      return;
    }

    tabs.sort((a, b) => a.index - b.index);

    const chosenSlots = getSelectedSlots();
    const countToFill = Math.min(tabs.length, chosenSlots.length);

    for (let i = 0; i < countToFill; i++) {
      const payload = buildPayload(chosenSlots[i]);
      try {
        await chrome.scripting.executeScript({
          target: { tabId: tabs[i].id },
          world: "MAIN",
          func: fillFrappeBulkForm,
          args: [payload],
        });
      } catch (err) {
        console.warn(`Skipped tab ${tabs[i].id}:`, err);
      }
    }

    document.getElementById("status").textContent =
      `✓ Filled ${countToFill} of ${tabs.length} form tab(s) (${chosenSlots.length} slot(s) selected).`;
  } finally {
    fillAllBtn.disabled = false;
  }
});

document
  .getElementById("fillUniqueCurrent")
  .addEventListener("click", async () => {
    const rows = parseUniqueRows();
    if (!rows.length) {
      document.getElementById("status").textContent =
        "Paste valid Excel rows (Time, Token No, Mobile) first.";
      return;
    }

    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!tab) return;

    const payload = {
      title: document.getElementById("uTitle").value.trim(),
      templateName: document.getElementById("uTemplate").value.trim(),
      rows,
    };

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      world: "MAIN",
      func: fillFrappeUniqueRecipients,
      args: [payload],
    });

    document.getElementById("status").textContent =
      `✓ Added ${rows.length} recipient row(s) with Unique Token JSON!`;
  });
