const courseList = {
    "bca": [
        "b.c.a.",
        "bachelor of computer applications",
        "computer applications",
        "bachelors in computer applications",
        "bca"
    ],
    "btech": [
        "btech", 
        "b.tech", 
        "bachelor of technology",
        "engineering",
        "technology"
    ],
    "bcom": [
        "b.com",
        "bcom",
        "bachelor of commerce",
        "commerce"
    ],
    "mba": [
        "mba",
        "m.b.a.",
        "master of business administration",
        "business administration",
        "management"
    ],
    "mca": [
        "m.c.a.",
        "master of computer applications",
        "computer applications",
        "masters in computer applications",
        "mca"
    ],
    "msc": [
        "m.sc.",
        "msc",
        "master of science",
        "science"
    ],
    "ba": [
        "b.a.",
        "ba",
        "bachelor of arts",
        "arts"
    ],
    "ma": [
        "m.a.",
        "ma",
        "master of arts",
        "arts"
    ],
    "bsc": [
        "b.sc.",
        "bsc",
        "bachelor of science",
        "science"
    ],
    "phd": [
        "ph.d.",
        "phd",
        "doctor of philosophy",
        "doctorate",
        "research"
    ],
    "llb": [
        "ll.b.",
        "llb",
        "bachelor of laws",
        "law",
        "legal studies"
    ],
    "llm": [
        "ll.m.",
        "llm",
        "master of laws",
        "law",
        "legal studies"
    ],
    "mtech": [
        "mtech", 
        "m.tech", 
        "master of technology", 
        "engineering", 
        "technology"
    ],
    "massCommunication": [
        "mass communication",
        "media studies",
        "journalism",
        "broadcasting",
        "media"
    ],
    "bvoc": [
        "b.voc.",
        "bvoc",
        "bachelor of vocational education",
        "vocational education",
        "vocational studies"
    ],
    "mcom": [
        "m.com",
        "mcom",
        "master of commerce",
        "commerce"
    ],
    "bba": [
        "b.b.a.",
        "bba",
        "bachelor of business administration",
        "business administration",
        "management"
    ],
    "mbbs": [
        "mbbs",
        "m.b.b.s.",
        "bachelor of medicine, bachelor of surgery",
        "medicine",
        "surgery"
    ],
    "agriculture": [
        "agriculture",
        "agricultural studies",
        "farming",
        "agricultural science",
        "agronomy"
    ],
    "mathematics": [
        "mathematics",
        "math",
        "maths",
        "applied mathematics",
        "pure mathematics"
    ],
    "architecture": [
        "architecture",
        "architectural studies",
        "bachelor of architecture",
        "design",
        "building design"
    ],
    "bpharma": [
        "b.pharma",
        "bachelor of pharmacy",
        "pharmacy",
        "pharmaceutical science",
        "b.pharm"
    ],
    "dpharma": [
        "d.pharma",
        "diploma in pharmacy",
        "pharmacy",
        "pharmaceutical science",
        "d.pharm"
    ]
};

  
  
  export const findCourseKey = (phrase) => {
  
    for (const key in courseList) {
      if (courseList[key].some((variant) => variant === phrase)) {
        return key;
      }
    }
    return phrase;
  };