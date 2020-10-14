import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export default class Orphanage {

    id: number;
    
    name: string;

    latitude: number;

    logitude: number;

    about: string;

    instructions: string;

    opening_hours: string;

    open_on_weekends: boolean;

}