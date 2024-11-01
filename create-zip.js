import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import JSZip from 'jszip';

async function createZip() {
  const zip = new JSZip();
  const tempDir = os.tmpdir();
  const zipFilePath = path.join(tempDir, 'project.zip');

  async function addFolderToZip(folderPath, zipFolder) {
    try {
      const files = await fs.readdir(folderPath);

      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stats = await fs.stat(filePath);

        if (stats.isDirectory()) {
          const newZipFolder = zipFolder.folder(file);
          await addFolderToZip(filePath, newZipFolder);
        } else {
          const fileContent = await fs.readFile(filePath);
          zipFolder.file(file, fileContent);
        }
      }
    } catch (error) {
      console.error(`Error processing folder ${folderPath}:`, error);
    }
  }

  try {
    await addFolderToZip('.', zip);

    const content = await zip.generateAsync({ type: 'nodebuffer' });
    await fs.writeFile(zipFilePath, content);
    console.log(`ZIP file created successfully: ${zipFilePath}`);
  } catch (error) {
    console.error('Error in createZip function:', error);
  }
}

createZip().catch((error) => {
  console.error('Error creating ZIP file:', error);
});