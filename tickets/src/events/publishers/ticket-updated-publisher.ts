import { Publisher, Subjects, TicketUpdatedEvent } from '@jvasudeva/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
