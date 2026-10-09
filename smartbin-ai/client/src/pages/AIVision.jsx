import { useState } from "react";

import {
  ScanLine,
  Upload,
  Camera,
  Image as ImageIcon,
  CheckCircle2,
  AlertTriangle,
  Recycle,
  Trash2,
  Leaf,
  ShieldAlert,
} from "lucide-react";

function AIVision() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [classification, setClassification] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setSelectedImage(imageUrl);

    // Demo AI classification
    setClassification({
      category: "Recyclable",
      confidence: 94,
      item: "Plastic Bottle",
      recommendation:
        "Place this item in the recyclable waste container.",
    });
  };

  const categories = [
    {
      name: "Wet Waste",
      value: "42%",
      icon: Leaf,
      className: "wet",
    },
    {
      name: "Dry Waste",
      value: "31%",
      icon: Trash2,
      className: "dry",
    },
    {
      name: "Recyclable",
      value: "19%",
      icon: Recycle,
      className: "recyclable",
    },
    {
      name: "Hazardous",
      value: "8%",
      icon: ShieldAlert,
      className: "hazardous",
    },
  ];

  return (
    <div className="ai-vision-page">

      {/* Header */}
      <header className="page-header">
        <div>
          <div className="eyebrow">
            <ScanLine size={14} />
            COMPUTER VISION
          </div>

          <h1>AI Vision</h1>

          <p>
            Identify and classify waste using AI-powered image analysis.
          </p>
        </div>

        <div className="header-status">
          <span className="online-dot" />
          AI Engine Ready
        </div>
      </header>


      {/* Main AI Section */}
      <section className="ai-vision-grid">

        {/* Upload Area */}
        <div className="dashboard-panel upload-panel">

          <div className="panel-header">
            <div>
              <h2>Waste Scanner</h2>

              <p>
                Upload an image to identify the waste category.
              </p>
            </div>

            <span className="ai-badge">
              AI VISION
            </span>
          </div>


          <label className="upload-area">

            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded waste"
                className="uploaded-image"
              />
            ) : (
              <>
                <div className="upload-icon">
                  <Upload size={24} />
                </div>

                <h3>
                  Upload Waste Image
                </h3>

                <p>
                  Drag & drop an image here or click to browse
                </p>

                <span className="upload-format">
                  JPG, PNG • Maximum 10 MB
                </span>
              </>
            )}

            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleImageUpload}
              hidden
            />

          </label>


          <div className="scanner-actions">

            <label className="scan-btn primary-scan">
              <ImageIcon size={16} />
              Choose Image

              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleImageUpload}
                hidden
              />
            </label>

            <button className="scan-btn secondary-scan">
              <Camera size={16} />
              Use Camera
            </button>

          </div>

        </div>


        {/* AI Result */}
        <div className="dashboard-panel result-panel">

          <div className="panel-header">
            <div>
              <h2>Classification Result</h2>

              <p>
                AI analysis of the submitted image
              </p>
            </div>

            {classification && (
              <CheckCircle2
                size={20}
                className="result-success-icon"
              />
            )}
          </div>


          {!classification ? (
            <div className="empty-result">

              <div className="empty-result-icon">
                <ScanLine size={28} />
              </div>

              <h3>
                Waiting for image
              </h3>

              <p>
                Upload a waste image to start AI classification.
              </p>

            </div>
          ) : (

            <div className="classification-result">

              <div className="classification-main">

                <div className="classification-icon">
                  <Recycle size={25} />
                </div>

                <div>
                  <span>
                    DETECTED OBJECT
                  </span>

                  <h2>
                    {classification.item}
                  </h2>
                </div>

              </div>


              <div className="classification-category">

                <div>
                  <span>
                    WASTE CATEGORY
                  </span>

                  <strong>
                    {classification.category}
                  </strong>
                </div>

                <div className="confidence">
                  <span>
                    CONFIDENCE
                  </span>

                  <strong>
                    {classification.confidence}%
                  </strong>
                </div>

              </div>


              <div className="confidence-bar">

                <div
                  style={{
                    width: `${classification.confidence}%`,
                  }}
                />

              </div>


              <div className="recommendation">

                <div className="recommendation-icon">
                  <CheckCircle2 size={17} />
                </div>

                <div>
                  <strong>
                    Recommended Action
                  </strong>

                  <p>
                    {classification.recommendation}
                  </p>
                </div>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* Waste Categories */}
      <section className="dashboard-panel categories-panel">

        <div className="panel-header">

          <div>
            <h2>Waste Classification</h2>

            <p>
              Current distribution of detected waste
            </p>
          </div>

          <span className="ai-badge">
            MODEL OUTPUT
          </span>

        </div>


        <div className="waste-category-grid">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <div
                className="waste-category-card"
                key={category.name}
              >

                <div
                  className={`category-icon ${category.className}`}
                >
                  <Icon size={19} />
                </div>

                <div className="category-info">

                  <strong>
                    {category.name}
                  </strong>

                  <span>
                    Detected waste
                  </span>

                </div>

                <strong className="category-value">
                  {category.value}
                </strong>

              </div>
            );
          })}

        </div>

      </section>


      {/* AI Pipeline */}
      <section className="dashboard-panel pipeline-panel">

        <div className="panel-header">

          <div>
            <h2>AI Processing Pipeline</h2>

            <p>
              How SmartBin AI processes waste images
            </p>
          </div>

          <span className="ai-badge">
            AUTOMATED
          </span>

        </div>


        <div className="ai-pipeline">

          <div className="pipeline-step">

            <div className="pipeline-number">
              01
            </div>

            <div className="pipeline-icon">
              <Upload size={18} />
            </div>

            <strong>
              Image Input
            </strong>

            <p>
              Waste image is uploaded.
            </p>

          </div>


          <div className="pipeline-line" />


          <div className="pipeline-step">

            <div className="pipeline-number">
              02
            </div>

            <div className="pipeline-icon">
              <ScanLine size={18} />
            </div>

            <strong>
              Object Detection
            </strong>

            <p>
              AI identifies the waste object.
            </p>

          </div>


          <div className="pipeline-line" />


          <div className="pipeline-step">

            <div className="pipeline-number">
              03
            </div>

            <div className="pipeline-icon">
              <Recycle size={18} />
            </div>

            <strong>
              Classification
            </strong>

            <p>
              Waste is assigned a category.
            </p>

          </div>


          <div className="pipeline-line" />


          <div className="pipeline-step">

            <div className="pipeline-number">
              04
            </div>

            <div className="pipeline-icon">
              <CheckCircle2 size={18} />
            </div>

            <strong>
              Recommendation
            </strong>

            <p>
              Disposal guidance is generated.
            </p>

          </div>

        </div>

      </section>


      {/* Prototype Notice */}
      <section className="ai-notice">

        <AlertTriangle size={17} />

        <p>
          <strong>Prototype Mode:</strong>{" "}
          The current classification result uses simulated AI output.
          A production version can connect this interface to a trained
          computer-vision model or AI API.
        </p>

      </section>

    </div>
  );
}

export default AIVision;