document.addEventListener("DOMContentLoaded", function () {
  sliderOption();
  resetPasswordInput();
  addfiles();
  discountCard();
});

function togglePasswordVisibility(element, inputId) {
  const input = document.getElementById(inputId);
  const showIcon = element.querySelector(".show-icon");
  const hiddenIcon = element.querySelector(".hidden-icon");

  if (input.type === "password") {
    // Show password
    input.type = "text";
    showIcon.hidden = true;
    hiddenIcon.hidden = false;
  } else {
    // Hide password
    input.type = "password";
    showIcon.hidden = false;
    hiddenIcon.hidden = true;
  }
}

function sliderOption() {
  const splideElement = document.querySelector(".splide");
  if (splideElement) {
    var splide = new Splide(".splide", {
      fixedWidth: "100%",
      height: "100%",
      perPage: 1,
      autoplay: true,
      pagination: true,
      arrows: false,
      perMove: 1,
      type: "fade",
      rewind: true,
    });

    splide.mount();
  }
}

function resetPasswordInput() {
  const inputs = document.querySelectorAll('.reset-inputs input[type="text"]');

  window.handleChange = function (input, index) {
    const value = input.value.replace(/[^0-9]/g, ""); // Allow only digits
    input.value = value; // Set the value in the current input
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus(); // Move to the next input
    }
  };

  window.handleBackspace = function (event, index) {
    if (event.key === "Backspace" && !event.currentTarget.value && index > 0) {
      inputs[index - 1].focus(); // Move to the previous input
    }
  };
}

function openPopup(modalId) {
  // Close all modals with class 'popup'
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.classList.add("hidden"); // Add hidden class to close
    popup.setAttribute("aria-hidden", "true"); // Update aria-hidden
  });

  // Open the target modal
  const targetModal = document.getElementById(modalId);
  if (targetModal) {
    targetModal.classList.remove("hidden"); // Remove hidden class to show
    targetModal.setAttribute("aria-hidden", "false"); // Update aria-hidden
  }
}
function closePopup(modalId) {
  const targetModal = document.getElementById(modalId);
  if (targetModal) {
    targetModal.classList.add("hidden"); // Add hidden class to show
    targetModal.setAttribute("aria-hidden", "ture"); // Update aria-hidden
  }
}

function addfiles() {
  let fileList = []; // All images here

  const fileInput = document.getElementById("add-files");
  const fileInfoContainer = document.querySelector(".file-info-container");

  if (!fileInput) {
    return;
  }

  fileInput.addEventListener("change", (event) => {
    const files = Array.from(event.target.files); // Convert file list to array
    fileList.push(...files); // Add new files to the fileList array
    fileInfoContainer.innerHTML = ""; // Clear previous content
    fileList.forEach((file, index) => {
      const fileInfo = document.createElement("div");
      fileInfo.classList.add(
        "flex",
        "w-full",
        "border-b",
        "border-b-[#E6E6E6]",
        "items-center",
        "p-3",
        "justify-start"
      );

      const fileThumbnail = document.createElement("img");
      fileThumbnail.src =
        "https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg";
      fileThumbnail.classList.add("w-10", "h-10", "rounded-md");

      const fileNameContainer = document.createElement("div");
      fileNameContainer.classList.add("mx-3", "flex-1");

      const fileNameHeader = document.createElement("h6");
      fileNameHeader.textContent = "اسم الملف";
      fileNameContainer.appendChild(fileNameHeader);

      const fileNameParagraph = document.createElement("p");
      fileNameParagraph.textContent = file.name;
      fileNameContainer.appendChild(fileNameParagraph);

      const fileSizeContainer = document.createElement("div");
      fileSizeContainer.classList.add("flex-1", "text-center");

      const fileSizeHeader = document.createElement("h6");
      fileSizeHeader.textContent = "حجم الملف";
      fileSizeContainer.appendChild(fileSizeHeader);

      const fileSizeParagraph = document.createElement("p");
      fileSizeParagraph.textContent =
        (file.size / 1024 / 1024).toFixed(2) + " MB";
      fileSizeContainer.appendChild(fileSizeParagraph);

      const deleteButtonContainer = document.createElement("div");
      deleteButtonContainer.classList.add("flex-1", "text-end");

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("cursor-pointer");
      deleteButtonContainer.appendChild(deleteButton);

      const deleteButtonImage = document.createElement("img");
      deleteButtonImage.src = "../../assets/icons/trash.svg";
      deleteButton.appendChild(deleteButtonImage);

      deleteButton.addEventListener("click", () => {
        // Remove the file from the fileList array
        fileList.splice(index, 1);
        fileInfo.remove();
      });

      fileInfo.appendChild(fileThumbnail);
      fileInfo.appendChild(fileNameContainer);
      fileInfo.appendChild(fileSizeContainer);
      fileInfo.appendChild(deleteButtonContainer);

      fileInfoContainer.appendChild(fileInfo);
    });
  });
}

function updateBadges(selectid) {
  const select = document.getElementById(selectid);
  console.log("efwf");
  if (!select) {
    return;
  }
  const selectedOptions = Array.from(select.selectedOptions).map(
    (option) => option.text
  );

  const parentSelect = select.parentElement;

  const resultDiv = parentSelect.nextElementSibling;
  console.log(resultDiv);
  resultDiv.innerHTML = "";

  selectedOptions.forEach((option) => {
    const badge = document.createElement("span");
    badge.classList.add("badge", "badge-primary", "mr-2", "mb-2");
    badge.innerText = option;
    resultDiv.appendChild(badge);
  });
}

function discountCard() {
  if (!document.querySelector(".card-button")) {
    return;
  }
  document.querySelectorAll(".card-button").forEach((button) => {
    button.addEventListener("click", function () {
      const cardViewQr = document.querySelector(".card-view .card-qr-code");
      const cardViewPercentage = document.querySelector(
        ".card-view .card-percentage"
      );
      const cardMarketLogo = document.querySelector(
        ".card-view .market-logo img"
      );

      const qrCodePath = this.getAttribute("qrCode-path");
      const marketLogo = this.getAttribute("market-logo");
      let h4Content = "";
      if (this.querySelector(".percentage")) {
        h4Content = this.querySelector(".percentage").textContent;
      } else {
        h4Content = this.getAttribute("percentage");
      }
      cardViewQr.setAttribute("src", qrCodePath);
      cardViewPercentage.textContent = h4Content;
      cardMarketLogo.setAttribute("src", marketLogo);
      if (cardMarketLogo.classList.contains("hidden")) {
        cardMarketLogo.classList.remove("hidden");
      }
    });
  });
}

function printCard() {
  const divToPrint = document.getElementById("printableDiv");
  const newWin = window.open("", "Print-Window");
  newWin.document.open();
  newWin.document.write(`
      <html>
        <head>
          <link
      rel="stylesheet"
      href="../../assets/css/output.css"
    />
     <style>
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        </style>
        </head>
        <body onload="window.print()">
          ${divToPrint.outerHTML}
        </body>
      </html>
    `);
  newWin.document.close();
  setTimeout(() => newWin.close(), 10);
}
