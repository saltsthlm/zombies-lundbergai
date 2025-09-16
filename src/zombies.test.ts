import { ok } from "node:assert/strict";
import { test } from "node:test";

interface IRoom {
  capacity: number;
};

const createRoom = (capacity: number): IRoom => {
  return {
    capacity: capacity
  }
};

const isRoomFull = (room: IRoom) => {
  return true;
};

test("room is full", () => {
  const room: IRoom = createRoom(0);

  ok(isRoomFull(room));
});

test.skip("empty room that fits one zombie is not full", () => { });

test.skip("room with no capacity cannot fit any zombies", () => { });

test.skip("one-roomer becomes full when a zombie is added", () => { });

test.skip("two-roomer is not full when a zombie is added", () => { });

test.skip("second zombie consumes first zombie when added to a one-roomer", () => { });

// You are free to add more tests that you think are relevant!
