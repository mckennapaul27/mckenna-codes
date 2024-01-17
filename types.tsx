import { type ReactNode } from 'react';
import {
    type FieldError,
    FieldErrors,
    FieldErrorsImpl,
    Merge,
} from 'react-hook-form';

export type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
    [key: string]: string; // In this code, [key: string]: string; is an index signature. It tells TypeScript that FormValues can have any number of additional properties, as long as their keys are strings and their values are also strings. This allows you to access properties using a string key.
};

export type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[];
};

export type Tag = {
    _id: string;
    name: string;
    slug?: string;
};

export type BlogType = {
    title: string;
    description?: string;
    updatedAt: string;
    slug: string;
    tags: Tag[];
    image: {
        url: string;
        alt: string;
        width: number;
        height: number;
        public_id: string;
    };
    body?: string;
};
