import fs from 'fs';
import path from 'path';

export default function Test() {
  const images = fs.readdirSync(path.join(process.cwd(), 'public', 'image'));

  return (
    <div>
      <h1>Images in /public/image:</h1>
      <ul>
        {images.map((img, i) => (
          <li key={i}>{img}</li>
        ))}
      </ul>
    </div>
  );
}
