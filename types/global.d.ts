/*
 * Copyright (c) 2017-2019.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2019-09-15 01:10:00 CDT
 */

declare module "*.css" {
    const exports: { [exportName: string]: string };
    export = exports;
}
declare module "*.less" {
    const exports: { [exportName: string]: string };
    export = exports;
}
declare module "*.gif";
declare module "*.png";
declare module "*.jpg";
