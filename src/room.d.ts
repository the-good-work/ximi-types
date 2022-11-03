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

export type UpdateStatePayload =
  | Pick<
      Room,
      | "participants"
      | "audioCurrent"
      | "audioPresets"
      | "layoutCurrent"
      | "layoutPresets"
    >
  | ParticipantPerformer;

export type ParticipantMetadata =
  | {
      type: Exclude<Participant["type"], "OUTPUT">;
    }
  | {
      type: Extract<Participant["type"], "OUTPUT">;
      target: string;
    };

export type Participant = ParticipantPerformer | ParticipantNonPerformer;

export type ParticipantPerformer = {
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

export type ParticipantNonPerformer = {
  name: string;
  type: "CONTROL" | "OUTPUT";
};

export type AudioPreset = {
  name: string;
  participant: ParticipantPerformer[];
};

export type LayoutPreset = {
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
