import phytoplankton from 'images/travlr.jpg';
import loanapproval from 'images/stockmarketchart.jpg';
import bonefracture from 'images/calculator.jpg';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

const projects = [
  {
    title: 'Automated Phytoplankton Classification (CAPCS)',
    description:
      'An end-to-end computer vision pipeline for automated phytoplankton identification from ocean imagery, built at the Lamont-Doherty Earth Observatory at Columbia University. Structured 12,315 microscopy images across 10 phytoplankton classes, performed diagnostics via confusion matrix analysis, and evaluated per-class precision, recall, and F1 scores to guide dataset refinement.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'Deep Learning', 'scikit-learn'],
    image: phytoplankton,
    links: {
      github: 'https://github.com/adityaram-2003/phytoplankton-classification',
      preview: 'https://adityaramk.com/projects/phytoplankton-classification',
    },
  },
  {
    title: 'Bone Fracture Detection from Medical Imaging',
    description:
      'A machine learning system for automated detection of bone fractures from medical imaging data (X-rays). Developed and evaluated classification models to assist radiologists in identifying fractures, leveraging image preprocessing, feature extraction, and deep learning techniques for robust diagnostic support.',
    skills: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Medical Imaging', 'scikit-learn'],
    image: bonefracture,
    links: {
      github: 'https://github.com/adityaram-2003',
      preview: null,
    },
  },
  {
    title: 'Loan Approval Prediction',
    description:
      'Research and development of a loan approval prediction model at Tata Consultancy Services. Designed a comprehensive data cleaning workflow leveraging Z-Score Normalization and IQR outlier elimination on a 40,000+ entry database, resulting in 89% accuracy using Gradient Boosting with an 8% accuracy improvement and 9% runtime reduction.',
    skills: ['Python', 'scikit-learn', 'Gradient Boosting', 'PCA', 'LDA', 'Pandas', 'NumPy'],
    image: loanapproval,
    links: {
      github: null,
      preview: null,
    },
  },
];

export default projects;
