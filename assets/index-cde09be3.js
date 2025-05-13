// Debugging log to confirm JS is loaded
console.log("index-cde09be3.js loaded");

// Ensure the DOM is fully loaded before making any changes
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  
  // Log if the root element is found
  if (rootElement) {
    console.log("Root element found, updating content...");
    rootElement.innerHTML = "<h1>ChloeBot is ready!</h1>"; // Update content for testing
  } else {
    console.error("Root element not found!");
  }
});

// Sample function to test JS
const sampleFunction = () => {
  console.log("Sample function is running.");
};

// Function to generate content from backend API
const generateContent = async () => {
  console.log("Starting content generation");

  const response = await fetch('https://chloebotbackend-production.up.railway.app/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      companyName: 'Your Company',
      productService: 'Product/Service Name',
      keyPoints: 'Key points here',
      clientMaterials: 'Client materials',
      brief: 'Brief details',
      contentType: 'Advertorial',
      wordCount: 500, // Example
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Response from backend:", data);
    document.getElementById('content').innerText = data.content; // Insert generated content into the div
  } else {
    console.error('Error generating content:', response.statusText);
  }
};

// Call the content generation function
generateContent();
