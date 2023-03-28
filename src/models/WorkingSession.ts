export type WorkingSessions = {
  data: WorkingSession[];
};

export type WorkingSession = {
  uuid: string;
  start_date: string;
  end_date: string;
};
