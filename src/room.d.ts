export type Room = {
  name: string;
  passcode: string;
  participants?: Participant[];
  currentSetting: (ParticipantPerformer | ParticipantControl)[];
  currentPreset: string;
  presets: Preset;
  controlCount?: number;
  outputCount?: number;
};

export type UpdateStatePayload =
  | Pick<Room, "participants" | "currentSetting" | "currentPreset" | "presets">
  | ParticipantPerformer;

export type ParticipantMetadata =
  | {
      type: Exclude<Participant["type"], "OUTPUT">;
    }
  | {
      type: Extract<Participant["type"], "OUTPUT">;
      target: string;
    };

export type RoomUpdateAction =
  | {
      type: "MUTE_AUDIO";
      room_name: string;
      participant: string;
      target: string;
    }
  | {
      type: "UNMUTE_AUDIO";
      room_name: string;
      participant: string;
      target: string;
    }
  | {
      type: "UPDATE_DELAY";
      room_name: string;
      participant: string;
      delay: number;
    }
  | {
      type: "UPDATE_LAYOUT";
      room_name: string;
      participant: string;
      layout: VideoLayout;
      slots: Slot[];
    };

export type RoomPresetRequest =
  | {
      type: "SAVE_PRESET";
      room_name: string;
      preset: Preset;
    }
  | {
      type: "LOAD_PRESET";
      room_name: string;
      index: number;
    };

export type Participant =
  | ParticipantPerformer
  | ParticipantControl
  | ParticipantOutput;

export type ParticipantPerformer = {
  sid: string;
  name: string;
  type: "PERFORMER";
  // participant audio configuration
  audioMixMute: string[]; // participant name
  audioOutDelay: number;
  // participant layout configuration
  video: {
    slots: Slot[];
    layout: VideoLayout;
  };
};

export type ParticipantControl = {
  sid: string;
  name: string;
  type: "CONTROL";
  audioMixMute: string[]; // participant name
};

export type ParticipantOutput = {
  sid: string;
  name: string;
  type: "OUTPUT";
};

export type Preset = {
  index: number;
  name: string;
  participant: ParticipantPerformer[];
};

export type Slot = {
  size: { x: number; y: number };
  position: { x: number; y: number };
  nickname: string;
};

export type VideoLayout =
  | "Default"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K";
