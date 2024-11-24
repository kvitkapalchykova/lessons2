const isAdmin = true;
const canWrite = true;

console.log(`Системний файл ${isAdmin && canWrite}`);
console.log(`Звичайний файл ${isAdmin || canWrite}`);
console.log(`Інвертуємо права адміна ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системний файл з редагуванням ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`);
