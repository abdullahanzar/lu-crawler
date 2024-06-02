import pako from 'pako';

export async function compressPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const compressed = pako.deflate(new Uint8Array(arrayBuffer));
  const compressedBlob = new Blob([compressed], { type: "application/pdf" });

  return compressedBlob;
}
