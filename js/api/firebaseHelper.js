import { database } from "./firebase";

export function writeNewCompanyData(
  companyID,
  name,
  contact_name,
  contact_email,
  company_info,
  location
) {
  database
    .collection("companys")
    .doc(companyID)
    .set({
      name: name,
      contact_name: contact_name,
      contact_email: contact_email,
      company_info: company_info,
      location: location
    })
    .then(function() {});
}
export function writeNewCompanyProjects(
  companyID,
  project_name,
  deliverables,
  project_info,
  start_time,
  video1,
  video2,
  video3
) {
  database
    .collection("companys")
    .doc(companyID)
    .collection("projects")
    .set({
      project_name: project_name,
      deliverables: deliverables,
      project_info: project_info,
      start_time: start_time,
      video1: video1,
      video2: video2,
      video3: video3
    })
    .then(function() {});
}
export function writeNewUserData(userID, name, email) {
  database
    .collection("users")
    .doc(userID)
    .set({
      name: name,
      email: email
    })
    .then(function() {});
}
export function writeNewUserInformation(userID, bio, experience, projects) {
  database
    .collection("users")
    .doc(userID)
    .set({
      bio: bio,
      experience: experience,
      projects: projects
    })
    .then(function() {});
}

export function writeNewUserLocation(userID, location) {
  database
    .collection("users")
    .doc(userID)
    .set({
      location: location
    })
    .then(function() {});
}
export function writeNewUserTests(
  userID,
  currentTest,
  testStartTime,
  testScore
) {
  database
    .collection("users")
    .doc(userID)
    .set({
      currentTest: currentTest,
      testStartTime: testStartTime,
      testScore: testScore
    })
    .then(function() {});
}
export function writeNewUserBio(userID, bio) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        bio: bio
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserExp(userID, experience) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        experience: experience
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserEducation(userID, education) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        education: education
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserGlobal(userID, global) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        global: global
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserName(userID, name) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        name: name
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserProjects(userID, projects) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        projects: projects
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserQuote(userID, quote) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        quote: quote
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserReferences(userID, references) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        references: references
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserTitle(userID, title) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        title: title
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function writeNewUserImage(userID, image) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        image: image
      },
      {
        merge: true
      }
    )
    .then(function() {});
}
export function getCompaniesCollectionForSearchIndexing(callback) {
  database
    .collection("companys")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        callback(doc.data());
      });
    });
}
