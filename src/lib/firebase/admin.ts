import { initializeApp, getApps, cert, AppOptions } from "firebase-admin/app";

const firebaseAdminConfig: AppOptions = {
  credential: cert({
    projectId: "14c706ff6a124925caa58d2cd171c4e5bd054b82e",
    clientEmail:
      "firebase-adminsdk-puduc@yield-master.iam.gserviceaccount.comclient_email property from the file",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWBBZIu6PF52rA\nyFpsj4LKqtMgojRofr/7AIyl7ZCG3XhW4vpL/FqWwYDxYCL+qf+ApJcGv8OoRsCm\nfXx8gQjYMMQWLnSwFTism2msITwOJHwISMFIUHMEdIZUsBvWwzfVjq3l2BzoVg7A\nIBiUE+qQ4heMhxVUkiQd0pGbHqLKucEwIYjz9kzw9FghMZUKcI0fCZv/4/iODhwI\nwqvC0/RW19zbqxMLbFlcUFZjHA9cGLgBSDQ15PZFCUIhRVg/iKLRPfLyLFWUOFip\nv1ZAslOdztI9SNdvKqkm0C5F0Gnuff7/W8thWhgBwygEOvNRS5HZCXa1SN+JdDWr\ncrPTXKW1AgMBAAECggEAAm9+jR++wO/I4+hcz3ZlATVUyCrZ/vhP1ZtkrSz2M7pU\nwdRdi+5E6j2qAkE1UD0iUMxbR1jFrG25ovpWkw7lPd1M0a9fZZxylxrO1GSVvQUK\nnnfP64Si2Weq5qUVTp9MwMLYP+sKTRtYkfXzcDQCkueYykdHKWBWBcXtZz9QFUp4\nYvMcUYCXrTNbf9Gn4xadem/5GFGpQuN8hRUqv11lzZhEZRoEHErmASYQjgVgIR4o\nDHiP6YbQHoTMXMUrmK+n9vU5+SYiHLsUNF48BFP7Tn92sDlzitEv+0CjyYR/BtvD\nf58UE9HixvC+rvbBLsxYCjcAIzWOJw2ez90QXIKi4QKBgQDI/HHZxVKOSw3F8Py3\nKOSYXK4cVu/gaQrFH4WlVi6PrDjIh2atXgxPL2jUz+QfRid3DdLuQoQGofyDBSuG\nJdk6pxYXacP0wZHykTa1VI1SVyA9jt8ZtZ6FzPPtNfW9oTG/ZMIBYMIwyb8uDwuJ\nDZHkZC4cBg50oKuNdwxjGd5pDwKBgQC/FAxAW6dPijkraLXmXRhUvx76xxZcV9c2\nDWdpbJxzWFGbsvcc8Ptll7b52u89cNItEhutY1MRAC6zLvrvfP4q53aNAaUwA3I0\nLwtsVgJyPlDxJbfAjCOGX3w+njjbnXfzuMcYOOcodq/bOxhINOwAkfW8UXevF/8Q\nv/p4xFIc+wKBgDWOBuxHRwtBdocTAtPvYpIyx/YnOD3s34DNOHho8Xk5I9xTMAns\nMI19DYr/ZkLrF6MCnPz93l5CFZ3357QUK8EUOq+8cAms9q3TAefpgsq5Co88nbgl\nC/uNNEY2Bagk5rOgLo3dcYE8kOO+AI3hfsmD5EF1X662DWBho3xYrUoDAoGAJ8M+\nQW5RROYYu4XQxJ1+4LPc+IbRimnlKSRk7rVhYUdxxBrb/bPQPPXzZ889leWSdzqb\nc9uFf7YwAa23Hns+USNVskYzX+h3rZBUqjjDzY5WPbiBopoHEoFwU3+NiXYdbiR3\nmfzNbcg1FEQZ63zH196H6qZxZ4hw1cV9lAAWrl0CgYEAhhw7f69l4L3AetQyoClw\nISTCcgLRW5KukolIrAUhrVD8hY+ZXX6G5vXxxgdZVJGcEHHoahYDRfjlhHN+fLzM\nge9sKY5qRoUUnTm4OdzbjE4acWP8uGEwppNWtBVGHmiOd6hp7yWi+qjqFXJdhbXs\n+XulQozSN7cHwgnoDP3ADxs=\n-----END PRIVATE KEY-----\n",
  }),
};

export const customInitApp = () => {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
};
