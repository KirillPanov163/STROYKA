import { FileSystem } from './components/FileSistem';

export default function AdminMenu() {
  return (
    <div className="flex">
      <FileSystem />
      <div className="flex-1 p-8">
        {/* Основное содержимое страницы */}
      </div>
    </div>
  );
}