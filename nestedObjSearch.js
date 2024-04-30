// Nested Object Search: Create a program that takes a nested object representing a file system directory structure. Implement a function that recursively searches for a file by name and returns its full path if found.
const fileSystem = {
  name: "Root",
  type: "folder",
  children: [
    {
      name: "Documents",
      type: "folder",
      children: [
        {
          name: "Work",
          type: "folder",
          children: [
            { name: "project.docx", type: "file" },
            { name: "presentation.pptx", type: "file" },
          ],
        },
        {
          name: "Personal",
          type: "folder",
          children: [
            {
              name: "vacation_photos",
              type: "folder",
              children: [
                { name: "beach.jpg", type: "file" },
                { name: "mountain.jpg", type: "file" },
              ],
            },
            { name: "expenses.xlsx", type: "file" },
          ],
        },
      ],
    },
    {
      name: "Music",
      type: "folder",
      children: [
        { name: "song1.mp3", type: "file" },
        { name: "song2.mp3", type: "file" },
      ],
    },
  ],
};
