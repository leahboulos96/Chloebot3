<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      if (localStorage.getItem("authenticated") !== "true") {
        window.location.href = "login.html"; // Redirect if not authenticated
      }
    </script>
    
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ChloeBot</title>
    <script type="module" crossorigin src="assets/index-cde09be3.js"></script>
  </head>
  <body>
    <h1>Generated Content</h1>
    <div id="content"></div> <!-- This will hold the generated content -->
    
    <script>
      const generateContent = async () => {
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
          document.getElementById('content').innerText = data.content;
        } else {
          console.error('Error generating content');
        }
      };

      // Trigger content generation
      generateContent();
    </script>
  </body>
</html>
