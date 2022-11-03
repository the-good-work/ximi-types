export type Room = {
  name: string;
  passcode: string;
  participants?: Participant[];
  audioCurrent?: AudioPreset;
  audioPresets?: AudioPreset[];
  layoutCurrent?: LayoutPreset;
  layoutPresets?: LayoutPreset[];
  controlCount?: number;
  outputCount?: number;
};

export type ParticipantMetadata =
  | {
      type: Exclude<Participant["type"], "OUTPUT">;
    }
  | {
      type: Extract<Participant["type"], "OUTPUT">;
      target: string;
    };

export type Participant =
  | {
      name: string;
      type: "CONTROL" | "OUTPUT";
    }
  | {
      name: string;
      type: "PERFORMER";
      // participant audio configuration
      audioMixMute: string[];
      audioOutDelay: number;
      // participant layout configuration
      video: {
        slots: Slot[];
        layout: VideoLayout;
      };
    };

export type AudioPreset = {
  name: string;
  participant: Participant[];
};

export type LayoutPreset = {
  name: string;
  participant: Participant[];
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
