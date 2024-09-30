// Initialize variables
const logo = document.getElementById('logo');
const logoWidthInput = document.getElementById('logoWidth');
const logoHeightInput = document.getElementById('logoHeight');
const zoomInput = document.getElementById('zoom');
const logoText = document.getElementById('logoText');
const textInput = document.getElementById('text');
const fontSelect = document.getElementById('font');
const colorInput = document.getElementById('color');
const colorPicker = document.getElementById('colorPicker');
const bgColorInput = document.getElementById('bgColor');
const bgColorPicker = document.getElementById('bgColorPicker');
const shadowColorInput = document.getElementById('shadowColor');
const shadowColorPicker = document.getElementById('shadowColorPicker');
const sizeInput = document.getElementById('size');
const skewInputX = document.getElementById('skewX');
const skewInputY = document.getElementById('skewY');
const rotateInputX = document.getElementById('rotateX');
const rotateInputY = document.getElementById('rotateY');
const boldCheckbox = document.getElementById('bold');
const italicsCheckbox = document.getElementById('italics');
const shadowCheckbox = document.getElementById('shadow');
const underlineCheckbox = document.getElementById('underline');
const overlineCheckbox = document.getElementById('overline');
const borderCheckbox = document.getElementById('border');
const borderColorInput = document.getElementById('borderColor');
const borderColorPicker = document.getElementById('borderColorPicker');
const borderSizeInput = document.getElementById('borderSize');
const borderRadiusInput = document.getElementById('borderRadius');
const borderOffsetInput = document.getElementById('borderOffset');
const logoBorderCheckbox = document.getElementById('logoBorder');
const logoBorderColorInput = document.getElementById('logoBorderColor');
const logoBorderColorPicker = document.getElementById('logoBorderColorPicker');
const logoBorderSizeInput = document.getElementById('logoBorderSize');
const logoBorderRadiusInput = document.getElementById('logoBorderRadius');
const logoBorderOffsetInput = document.getElementById('logoBorderOffset');
const textOpacityInput = document.getElementById('textOpacity');
const bgOpacityInput = document.getElementById('bgOpacity');
const shadowSizeInput = document.getElementById('shadowSize');
const shadowDirectionInput = document.getElementById('shadowDirection');
const downloadBtn = document.getElementById('downloadBtn');

// Set default background color on page load
bgColorPicker.value = '#ffffff';
bgColorInput.value = '#ffffff';

// Set default colors on page load
colorPicker.value = '#000000';
colorInput.value = '#000000';
shadowColorPicker.value = '#000000';
shadowColorInput.value = '#000000';

function parseColor(color) {
    // Create a canvas to draw the color
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.fillStyle = color;
    const rgba = context.fillStyle;

    // Convert RGBA to hex
    if (rgba.startsWith('rgba')) {
        const values = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        const r = parseInt(values[1], 10);
        const g = parseInt(values[2], 10);
        const b = parseInt(values[3], 10);
        const a = values[4] ? Math.round(parseFloat(values[4]) * 255) : 255;
        return `#${((1 << 24) + (r << 16) + (g << 8) + a).toString(16).slice(1)}`;
    }

    // Return the hex value
    return rgba; // Will return named colors or hex directly
}

function bgParseColor(color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.fillStyle = color;
    const rgba = context.fillStyle;

    if (rgba.startsWith('rgba')) {
        const values = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        const r = parseInt(values[1], 10);
        const g = parseInt(values[2], 10);
        const b = parseInt(values[3], 10);
        const a = values[4] ? parseFloat(values[4]) : 1;
        return { r, g, b, a };
    }

    // Handle named colors and hex values
    const colorHex = rgba.replace(/^#/, '');
    const bigint = parseInt(colorHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    
    return { r, g, b, a: 1 }; // Default alpha to 1
}

// Set up event listeners
textInput.addEventListener('input', updateLogo);
fontSelect.addEventListener('change', updateLogo);

colorInput.addEventListener('input', function() {
    this.value = this.value.trim();
    const color = parseColor(colorInput.value);
    colorPicker.value = color;
    updateLogo();
});
colorPicker.addEventListener('input', function() {
    colorInput.value = colorPicker.value;
    updateLogo();
});

bgColorInput.addEventListener('input', function() {
    this.value = this.value.trim();
    const bgColor = bgParseColor(bgColorInput.value);
    bgColorPicker.value = bgColor;
    updateLogo();
});

bgColorPicker.addEventListener('input', function() {
    bgColorInput.value = bgColorPicker.value;
    updateLogo();
});

shadowColorInput.addEventListener('input', function() {
    this.value = this.value.trim();
    const shadowColor = parseColor(shadowColorInput.value);
    shadowColorPicker.value = shadowColor;
    updateLogo();
});
shadowColorPicker.addEventListener('input', function() {
    shadowColorInput.value = shadowColorPicker.value;
    updateLogo();
});

borderColorInput.addEventListener('input', function() {
    this.value = this.value.trim();
    const borderColor = parseColor(borderColorInput.value);
    borderColorPicker.value = borderColor;
    updateLogo();
});
borderColorPicker.addEventListener('input', function() {
    borderColorInput.value = borderColorPicker.value;
    updateLogo();
});

logoBorderColorInput.addEventListener('input', function() {
    this.value = this.value.trim();
    const logoBorderColor = parseColor(logoBorderColorInput.value);
    logoBorderColorPicker.value = logoBorderColor;
    updateLogo();
});
logoBorderColorPicker.addEventListener('input', function() {
    logoBorderColorInput.value = logoBorderColorPicker.value;
    updateLogo();
});

logoWidthInput.addEventListener('input', function() {
    document.getElementById('logoWidthValue').innerText = this.value;
    updateLogo();
});
logoHeightInput.addEventListener('input', function() {
    document.getElementById('logoHeightValue').innerText = this.value;
    updateLogo();
});
zoomInput.addEventListener('input', function() {
    document.getElementById('zoomValue').innerText = this.value;
    updateLogo();
});
sizeInput.addEventListener('input', function() {
    document.getElementById('sizeValue').innerText = this.value;
    updateLogo();
});
skewInputX.addEventListener('input', function() {
    document.getElementById('skewValueX').innerText = this.value;
    updateLogo();
});
skewInputY.addEventListener('input', function() {
    document.getElementById('skewValueY').innerText = this.value;
    updateLogo();
});
rotateInputX.addEventListener('input', function() {
    document.getElementById('rotateValueX').innerText = this.value;
    updateLogo();
});
rotateInputY.addEventListener('input', function() {
    document.getElementById('rotateValueY').innerText = this.value;
    updateLogo();
});
shadowSizeInput.addEventListener('input', function() {
    document.getElementById('shadowSizeValue').innerText = this.value;
    updateLogo();
});
shadowDirectionInput.addEventListener('input', function() {
    document.getElementById('shadowDirectionValue').innerText = this.value;
    updateLogo();
});
borderSizeInput.addEventListener('input', function() {
    document.getElementById('borderSizeValue').innerText = this.value;
    updateLogo();
});
borderRadiusInput.addEventListener('input', function() {
    document.getElementById('borderRadiusValue').innerText = this.value;
    updateLogo();
});
borderOffsetInput.addEventListener('input', function() {
    document.getElementById('borderOffsetValue').innerText = this.value;
    updateLogo();
});
logoBorderSizeInput.addEventListener('input', function() {
    document.getElementById('logoBorderSizeValue').innerText = this.value;
    updateLogo();
});
logoBorderRadiusInput.addEventListener('input', function() {
    document.getElementById('logoBorderRadiusValue').innerText = this.value;
    updateLogo();
});
logoBorderOffsetInput.addEventListener('input', function() {
    document.getElementById('logoBorderOffsetValue').innerText = this.value;
    updateLogo();
});
textOpacityInput.addEventListener('input', function() {
    textOpacityValue.innerText = this.value;
    updateLogo();
});
bgOpacityInput.addEventListener('input', function() {
    bgOpacityValue.innerText = this.value;
    updateLogo();
});
boldCheckbox.addEventListener('change', updateLogo);
italicsCheckbox.addEventListener('change', updateLogo);
shadowCheckbox.addEventListener('change', updateLogo);
underlineCheckbox.addEventListener('change', updateLogo);
overlineCheckbox.addEventListener('change', updateLogo);
borderCheckbox.addEventListener('change', updateLogo);
logoBorderCheckbox.addEventListener('change', updateLogo);

// Function to update logo styling
function updateLogo() {
    const text = textInput.value;
    const font = fontSelect.value;
    const color = parseColor(colorInput.value);
    const bgColor = bgParseColor(bgColorInput.value);
    const shadowColor = parseColor(shadowColorInput.value);
    const logoWidth = logoWidthInput.value;
    const logoHeight = logoHeightInput.value;
    const zoom = zoomInput.value;
    const size = sizeInput.value;
    const skewX = skewInputX.value;
    const skewY = skewInputY.value;
    const rotateX = rotateInputX.value;
    const rotateY = rotateInputY.value;
    const borderColor = parseColor(borderColorInput.value);
    const borderSize = borderSizeInput.value;
    const borderRadius = borderRadiusInput.value;
    const borderOffset = borderOffsetInput.value;
    const logoBorderColor = parseColor(logoBorderColorInput.value);
    const logoBorderSize = logoBorderSizeInput.value;
    const logoBorderRadius = logoBorderRadiusInput.value;
    const logoBorderOffset = logoBorderOffsetInput.value;
    const shadowSize = shadowSizeInput.value;
    const shadowDirection = shadowDirectionInput.value;
    const shadowOffsetX = shadowSize * Math.cos(shadowDirection * (Math.PI / 180));
    const shadowOffsetY = shadowSize * Math.sin(shadowDirection * (Math.PI / 180));
    const textOpacity = textOpacityInput.value / 100; // Convert to decimal
    const bgOpacity = bgOpacityInput.value / 100; // Convert to decimal

    logo.style.width = `${logoWidth}px`;
    logo.style.height = `${logoHeight}px`;
    logo.style.transform = `scale(${zoom})`;
    logoText.style.fontFamily = font;
    logoText.style.color = color;
    logoText.style.fontSize = `${size}px`;
    logoText.style.fontWeight = boldCheckbox.checked ? `700` : 'normal';
    logoText.style.fontStyle = italicsCheckbox.checked ? `italic` : 'normal';
    logoText.style.textShadow = shadowCheckbox.checked ? `2px 2px 5px ${shadowColor}` : 'none';
    logoText.style.transform = `skewX(${skewX}deg) skewY(${skewY}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Apply text decoration
    let textDecoration = [];
    if (underlineCheckbox.checked) textDecoration.push('underline');
    if (overlineCheckbox.checked) textDecoration.push('overline');
    logoText.style.textDecoration = textDecoration.join(' ');
    
    // Set border styling
    if (borderCheckbox.checked) {
        logoText.style.border = `${borderSize}px solid ${borderColor}`; // Use the border color
        logoText.style.padding = `${borderOffset}px`; // Add padding if there's a border
        logoText.style.borderRadius = `${borderRadius}%`;
    } else {
        logoText.style.border = 'none';
    }
    
    if (logoBorderCheckbox.checked) {
        logo.style.border = `${logoBorderSize}px solid ${logoBorderColor}`; // Use the border color
        logo.style.padding = `${logoBorderOffset}px`; // Add padding if there's a border
        logo.style.borderRadius = `${logoBorderRadius}%`;
    } else {
        logo.style.border = 'none';
    }
    
    logoText.style.textShadow = shadowCheckbox.checked 
        ? `${shadowOffsetX}px ${shadowOffsetY}px ${shadowSize}px ${shadowColor}` 
        : 'none';
    
    // Set opacity and background color
    logoText.style.opacity = textOpacity; // Set text opacity

    logo.style.backgroundColor = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgOpacity})`; // Set background opacity

    logoText.textContent = text || 'Logo Text';
}

// Populate font options
function populateFonts() {
    const fonts = window.fontList; // Access the fonts from fonts.js
    fonts.forEach(font => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        fontSelect.appendChild(option);
    });
}
// Call the function to populate the fonts
populateFonts();

// Download button 
downloadBtn.addEventListener('click', function() {
    if (textInput.value.trim() === '') {
        textInput.focus();
        return; 
    }

    const logoWidth = parseInt(logoWidthInput.value);
    const logoHeight = parseInt(logoHeightInput.value);
    
    // Create a new canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = logoWidth;
    canvas.height = logoHeight;

    // Set the clipping area
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.clip();

    // Draw background
    const bgColor = bgParseColor(bgColorInput.value);
    ctx.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgOpacityInput.value / 100})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text properties
    const text = textInput.value || 'Logo Text';
    const font = fontSelect.value;
    const fontSize = sizeInput.value;
    const color = parseColor(colorInput.value);
    
    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center'; // Adjust alignment as needed
    ctx.textBaseline = 'middle'; // Adjust baseline as needed

    // Apply text shadow if enabled
    if (shadowCheckbox.checked) {
        const shadowSize = shadowSizeInput.value;
        const shadowDirection = shadowDirectionInput.value;
        const shadowOffsetX = shadowSize * Math.cos(shadowDirection * (Math.PI / 180));
        const shadowOffsetY = shadowSize * Math.sin(shadowDirection * (Math.PI / 180));
        
        ctx.shadowColor = parseColor(shadowColorInput.value);
        ctx.shadowOffsetX = shadowOffsetX;
        ctx.shadowOffsetY = shadowOffsetY;
        ctx.shadowBlur = shadowSize;
    } else {
        ctx.shadowColor = 'transparent';
    }

    // Draw the text
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Apply border if enabled
    if (borderCheckbox.checked) {
        const borderSize = borderSizeInput.value;
        const borderColor = parseColor(borderColorInput.value);
        const borderRadius = borderRadiusInput.value;
        
        ctx.lineWidth = borderSize;
        ctx.strokeStyle = borderColor;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }

    // Export the canvas as an image
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
