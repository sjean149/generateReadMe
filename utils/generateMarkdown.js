// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'BSD': 
        badge = `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`
        break;
    case 'MIT': 
        badge = `https://img.shields.io/badge/License-ISC-blue.svg`
        break;
    case 'GNU': 
        badge = `https://img.shields.io/badge/License-GPLv3-blue.svg`
        break;
    case 'Apache': 
        badge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`
        break;
    case 'ISC': 
        badge = `https://img.shields.io/badge/License-ISC-blue.svg`
        break;
    default:
      badge = " ";
  }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'BSD': 
        licenseLink = `https://opensource.org/licenses/BSD-3-Clause`;
        break;
    case 'MIT': 
        licenseLink = `https://opensource.org/licenses/MIT`;
        break;
    case 'GNU': 
        licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
        break;
    case 'Apache': 
        licenseLink = `https://opensource.org/licenses/Apache-2.0`;
        break;
    case 'ISC': 
        licenseLink = `https://opensource.org/licenses/ISC`;
        break;

  } return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'BSD': 
        licenseText = `BSD licenses originated from a Unix-type operating system. They fall under the category of permissive licenses, and there is minimal restriction on how you use and distribute them. This type of license allows you to take an original BSD open source product, then copy it, modify it, and distribute it according to your own needs.
        There are two main types of BSD license:
        1. the Modified BSD license (3 clauses), which allows you virtually unlimited freedom to change the original product as long as you include the original BSD copyright and license notice.
        2. the FreeBSD license which contains 2 clauses referring to what you can do with it. `;
        break;
    case 'MIT': 
        licenseText  = `The MIT license is another permissive license. It’s been around since the late 1980s, so is very popular with developers who want to change software code to their own needs and create a new product without facing any restrictions or at least minimal restrictions.
        One of the main reasons that the MIT license is so popular is that they can modify the code, add to it, and then publish and distribute their own version as well as being able to sell it. If you make things like templates for indemnity agreements or other such software that would work well in a larger context, and you don’t mind other people using your code in commercial projects, then the MIT license is a good choice.`;
        break;
    case 'GNU': 
        licenseText  = `The GNU GPL is a copyleft license and perhaps the most popular of the open source licenses. It guarantees developers the freedom to take a program and modify it in any way they want, as long as they then distribute that altered version as free software. It comes in two slightly different versions, GPLV2 and GPLV3, with the former having a library exclusion that the latter does not.
        Developed in 1989 (by Richard Stallman), it was originally designed to protect software developed under the auspices of the GNU Project. If you have a project that you want to ensure remains accessible, even in modified forms, then this license is the one to choose. This license allows your code to be used by anyone while ensuring modified versions are also released as open-source products. That includes making the completely modified source code available to the public.`;
        break;
    case 'Apache': 
        licenseText  = `Produced by the Apache Software Foundation (formerly known as the Apache Group), Apache 2.0 is a permissive free software license that is very popular with developers and commercial organizations. As with other permissive licenses, anyone can take the original software and modify it as they see fit, then distribute their modified version under the terms of the original Apache product.
        Developers and organizations no longer need to include any attribution to the Apache license if the advertising clause has been removed. Apache 2.0 grants patent rights and carefully defines any concept included in the program itself. For instance, if you designed an email verification program and released it under Apache, a company could incorporate it into a CRM system they sell.`;
        break;
    case 'ISC': 
        licenseText  = `Similar to the MIT license, the ISC version is a permissive license. It could be described as a ‘stripped-down’ version of the MIT license as it removes some of the language and jargon that some people consider unnecessary. While the language has been changed or removed, it operates on the same functional level as its MIT ‘cousin.’
        Like the MIT license, the ISC license has only two requirements for anyone who modifies a program. The first is that anyone who alters the software has to include the original license. The second is that they must include a copy of the license itself when they copy or modify the original licensed code in any new version. Organizations that use the software under an ISC license can use any new code commercially.`;
        break;
    default: 
        licenseText=" ";

  } return licenseText ;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log("It came throught: ", answers);
        let githubLink = `https://github.com/${answers.githubUsername}`;
        let badge = renderLicenseBadge(answers.license);
        let licenseLink = renderLicenseLink(answers.license);
        let licenseText = renderLicenseSection(answers.license);
        let tableOfContents = 
        `\n[Title](#title)\n`+
        `[Desciption](#description)\n`+
        `[Installation](#installation)\n`+
        `[Usage](#usage)\n`+
        `[Credits](#credits)\n`+
        `[License](#license)`;
        
           
        return  `# ${answers.title}\n\n`+
        `![${answers.badge}](${badge})\n\n`+
        `## Description\n`+
        `${answers.description}\n`+
        `## Table of Contents\n`+
        `${tableOfContents}\n\n`+
        `## Installation:\n`+
        `${answers.installation}\n\n`+
        `## Usage:\n`+
        `${answers.usage}\n\n` +
        `## Contributing Authors:\n`+
        `${answers.authors}\n\n`+
        `## Tests Used:\n`+
        `${answers.tests}\n\n`+
        `## License\n`+
        `${licenseText}\n\n`+
        `[Click here for more information](${licenseLink})\n`+
        `## Questions:\n\n`+ 
        `### Github UserName: [${answers.githubUsername}](${githubLink})\n\n`+
        `### Please email me at [${answers.email}](mailto:${answers.email}) if you have any questions\n`;
    
    }

    module.exports = generateMarkdown;


