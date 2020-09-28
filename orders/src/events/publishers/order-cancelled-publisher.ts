import { Subjects, Publisher, OrderCancelledEvent } from '@jvasudeva/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
