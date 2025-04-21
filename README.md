# 🚗 Safe Turn – Velocity Control using Lane Detection

**Tags**: #AutonomousDriving #ComputerVision #DigitalImageProcessing

## 🧠 Overview

**Safe Turn** is a real-time computer vision-based system for **velocity control in autonomous vehicles**, using **lane detection** and **road curvature analysis**. By leveraging image processing and curve fitting algorithms, the system predicts safe velocities in real-time while navigating curves.

This project explores key concepts of lane detection, distortion correction, and perspective transformation to deliver actionable insights into vehicle motion and decision-making.

---

## 🎯 Features

- 🚦 **Real-Time Velocity Estimation** based on lane curvature.
- 🛣️ **Lane Detection** using computer vision and polynomial fitting.
- 🔄 **Distortion Correction** to correct camera artifacts.
- 🔁 **Perspective Transform** to obtain bird’s eye view of lanes.
- 📐 **Curvature & Offset Calculation** for path planning and control.
- 🎥 Video stream processing for dynamic lane tracking.

---

## 🧰 Techniques & Tools Used

- **Computer Vision**: OpenCV
- **Image Processing**: Gradient and color thresholding
- **Lane Detection Pipeline**:
  - Camera Calibration & Undistortion
  - Perspective (Bird's Eye) Transform
  - Sliding Window & Polynomial Fit
- **Velocity Estimation**:
  - Curvature-based control logic
  - Road turn prediction using lane geometry

---

## 📁 Project Structure

```bash
📦 SafeTurn
├── 📂 assets               # Sample images and videos
├── 📂 src
│   ├── camera_calibration.py
│   ├── lane_detection.py
│   ├── perspective_transform.py
│   ├── velocity_estimation.py
│   └── main.py             # Main script to run the pipeline
├── requirements.txt
└── README.md
