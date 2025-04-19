import { Injectable } from '@angular/core';
import { Gift } from './gift.interface';
import { v4 as uuidv4 } from 'uuid';
import { GiftRepository } from './gift.repository';

@Injectable({ providedIn: 'root' })
export class InMemoryGiftRepository implements GiftRepository {
  private gifts: Gift[] = [];

  async getAll(): Promise<Gift[]> {
    return Promise.resolve(this.gifts);
  }

  public async add(gift: Omit<Gift, 'id'>): Promise<void> {
    this.gifts.push({ ...gift, id: uuidv4() })
    return Promise.resolve();
  }
}
