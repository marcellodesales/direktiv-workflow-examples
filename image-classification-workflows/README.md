# Image classification as SFW / NSFW

## Description

The worklfow is a pretty comprehensive example of event-driven workflows, serverless functions and Direktiv Apps being used. The workflow does the following:

1. When an image is uploaded to Azure Blob Storage, an event is recieved by Direktiv with the URL of the uploaded image (see https://docs.direktiv.io/events/cloud/azure/ for details on how to configure Azure)
2. The image is then classified using the Google Vision API (http-request)
3. Based on the rating given by Google Vision, we add a watermark to the image:
    - The watermark is added by the Python script (classify-image.yaml.add-watermark.py)
    - The Ptyhon script is run serverless by Direktiv in the Python container
4. An email template is created (in HTML) using Mustache (a Direktiv App https://apps.direktiv.io/search-results/mustache?v=1.0)
5. Send an email with the image (watermarked) to the recipients. 
6. Watermarked image is then uploaded back into Azure Storage and the old image deleted

Any errors are captured using exception handling and ServiceNow incidents are created using the snc-incidet-subflow.yaml workflow

