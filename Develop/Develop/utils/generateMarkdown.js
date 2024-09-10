// returns existing license badge
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}
// returns the license badge link
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "MIT": licenseLink = "https://mit-license.org";
      break;
    case "BSD": licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL": licenseLink = "https://www.gnu,org/licenses/gpl-3.0.en.html";
      break;
    case "Apache": licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink:"";
      break;
  }
}
function renderLicenseSection(license) { 
  let licenseSect ="";
  if (license != "None") {
    licenseSect+= "## License\n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }
}

// Functions creates the markdown portion of the README
function generateMarkdown(data) {
  const sections = ["Descriptions", "Installations", "Usage", "Contributing", "Tests", "License", "Questions"];
  let markdown = "# " + data.title + "\n";
  markdown += renderLicenseBadge(data.license) + "\n";

  markdown += "## Table of Contents\n";
  for (let i=0; i<sections.length; i++) {
    if (! (sections[i] === "License" && data.license === "None")) {
      markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
  }
}
  markdown += "\n";
  //this is the description
  markdown += "## " + sections[0] + "\n";
  markdown += data.description + "\n";
  //adding the installation 
  markdown += "## " + sections[1] + "\n";
  markdown += data.install + "\n";
  //usage
  markdown += "## " + sections[2] + "\n";
  markdown += data.usage + "\n";
  //contribution
  markdown += "## " + sections[3] + "\n";
  markdown += data.guidelines + "\n";
  //testing
  markdown += "## " + sections[4] + "\n";
  markdown += data.test + "\n";
  //adding the license
  markdown += renderLicenseSection(data.license) + "\n";
  markdown += "## " + sections[6] + "\n";
  markdown += "You can find me [HERE](https://github.com/" + data.username + ") on Github\n";
  markdown += "You can email me at " + data.email + " if you have any additional questions.\n"

  return `# ${data.title}

`;
}

export default generateMarkdown;
