import { Publisher, OrderCreatedEvent, Subjects } from '@jvasudeva/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
