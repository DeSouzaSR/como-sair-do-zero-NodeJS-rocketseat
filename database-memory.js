import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #video = new Map();

  list() {
    return Array.from(this.#video.entries()).map((videoArray) => {
      const id = videoArray[0];
      const data = videoArray[1];

      return {
        id,
        ...data,
      };
    });
  }

  create(video) {
    const videoId = randomUUID();
    this.#video.set(videoId, video);
  }

  update(id, video) {
    this.#video.set(id, video);
  }

  delete(id) {
    this.#video.set(id);
  }

  delete(id) {
    this.#video.set(id);
  }
}
