/*
 * Copyright (c) 2021, Linus Groh <linusg@serenityos.org>
 *
 * SPDX-License-Identifier: BSD-2-Clause
 */

#pragma once

#include <LibJS/Runtime/Object.h>

namespace JS::Temporal {

class PlainYearMonthPrototype final : public Object {
    JS_OBJECT(PlainYearMonthPrototype, Object);

public:
    explicit PlainYearMonthPrototype(GlobalObject&);
    virtual void initialize(GlobalObject&) override;
    virtual ~PlainYearMonthPrototype() override = default;

private:
    JS_DECLARE_NATIVE_FUNCTION(calendar_getter);
    JS_DECLARE_NATIVE_FUNCTION(year_getter);
    JS_DECLARE_NATIVE_FUNCTION(month_getter);
    JS_DECLARE_NATIVE_FUNCTION(month_code_getter);
    JS_DECLARE_NATIVE_FUNCTION(days_in_year_getter);
    JS_DECLARE_NATIVE_FUNCTION(days_in_month_getter);
    JS_DECLARE_NATIVE_FUNCTION(months_in_year_getter);
    JS_DECLARE_NATIVE_FUNCTION(in_leap_year_getter);
    JS_DECLARE_NATIVE_FUNCTION(to_string);
    JS_DECLARE_NATIVE_FUNCTION(to_locale_string);
    JS_DECLARE_NATIVE_FUNCTION(to_json);
    JS_DECLARE_NATIVE_FUNCTION(value_of);
    JS_DECLARE_NATIVE_FUNCTION(get_iso_fields);
};

}
