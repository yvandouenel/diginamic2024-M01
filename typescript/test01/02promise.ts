function getToken(): Promise<string> {
  return new Promise(
    (
      resolve: (value: string | PromiseLike<string>) => void,
      reject: (reason?: any) => void
    ) => {
      if (Math.random() > 0.5) resolve("1");
      else reject("Erreur");
    }
  );
}
