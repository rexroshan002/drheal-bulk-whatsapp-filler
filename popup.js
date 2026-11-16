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

let previewMode = "single"; // "single" | "multi"

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
    tplInput.value = "confimation_new_kan-";
  } else if (category === "followup") {
    tplInput.value = "followup_confirmation-";
  }
}

function getSelectedSlots() {
  const checked = [...document.querySelectorAll(".slot-cb:checked")].map(
    (cb) => SLOTS[Number(cb.value)],
  );
  return checked.length ? checked : [SLOTS[0]];
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function refreshUI() {
  const allBoxes = [...document.querySelectorAll(".slot-cb")];
  allBoxes.forEach((cb) => {
    cb.closest(".slot-pill").classList.toggle("active", cb.checked);
  });

  const selectedSlots = getSelectedSlots();
  const checkedCount = allBoxes.filter((cb) => cb.checked).length;

  // Update badge & toggle button
  document.getElementById("selectedCountBadge").textContent =
    checkedCount === 1
      ? "1 Slot Selected"
      : `${checkedCount || 1} Slots Selected`;

  const allChecked = allBoxes.every((cb) => cb.checked);
  document.getElementById("toggleAllSlots").textContent = allChecked
    ? "Clear All"
    : "Select All";

  // Automatically switch to multi preview when user checks > 1 slot
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

document.addEventListener("DOMContentLoaded", () => {
  const dates = getDefaultDates();
  document.getElementById("dateEn").value = dates.en;
  document.getElementById("dateKn").value = dates.kn;

  const container = document.getElementById("slotsContainer");
  SLOTS.forEach((slot, idx) => {
    const label = document.createElement("label");
    label.className = `slot-pill ${idx === 0 ? "active" : ""}`;
    label.innerHTML = `<input type="checkbox" class="slot-cb" value="${idx}" ${idx === 0 ? "checked" : ""}> <span>${slot.label}</span>`;
    container.appendChild(label);
  });

  syncTemplateName();
  refreshUI();

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
});

// Injected function executed once inside each target tab's MAIN world
// Injected function executed once inside each target tab's MAIN world
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

  // Run without blocking executeScript on background-throttled timers
  (async () => {
    // 1. Set Title first
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

    // 2. Check "Use Template" (unchecked -> checked)
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

    // 3. Set Template & Variable Type
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

    // 4. Set Template Variables (Frappe Code / Ace Editor field)
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
    // Match any drheal.in tab in the current window whose URL contains bulk-whatsapp
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
    const tabs = await chrome.tabs.query({
      currentWindow: true,
      url: "*://*.drheal.in/app/bulk-whatsapp-message/*",
    });

    if (!tabs.length) {
      document.getElementById("status").textContent =
        "No Bulk WhatsApp tabs found in this window.";
      return;
    }

    tabs.sort((a, b) => a.index - b.index);

    const chosenSlots = getSelectedSlots();
    const countToFill = Math.min(tabs.length, chosenSlots.length);

    for (let i = 0; i < countToFill; i++) {
      const payload = buildPayload(chosenSlots[i]);
      await chrome.scripting.executeScript({
        target: { tabId: tabs[i].id },
        world: "MAIN",
        func: fillFrappeBulkForm,
        args: [payload],
      });
    }

    document.getElementById("status").textContent =
      `✓ Done: Filled ${countToFill} tab(s) in this window.`;
  } finally {
    fillAllBtn.disabled = false;
  }
});
