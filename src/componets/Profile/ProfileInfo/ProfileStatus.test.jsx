import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component:", () => {
	test("status из props должен быть в state", () => {
		const component = create(<ProfileStatus status="it-kamasutra.com"/>);
		const instance = component.getInstance();//getInstance() - Дай мне созданый объект ProfileStatus
		expect(instance.state.status).toBe("it-kamasutra.com");//toBe("it-kamasutra.com") - Должно быть "it-kamasutra.com"
	});

	test("после создания <span> должен отображаться", () => {
		const component = create(<ProfileStatus status="it-kamasutra.com" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span).not.toBeNull();
	});

	test("после создания <input> не должен отображаться", () => {
		const component = create(<ProfileStatus status="it-kamasutra.com" />);
		const root = component.root;
		expect(() => {
			let input = root.findByType("input");
		}).toThrow();//В expect передаём функцию и ожидаем что будет ошибка
	});

	test("после создания <span> должен содержать правильный status", () => {
		const component = create(<ProfileStatus status="it-kamasutra.com" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("it-kamasutra.com");
	});

	test("input должен отображаться в режиме editMode=true вместо span", () => {
		const component = create(<ProfileStatus status="it-kamasutra.com" />);
		const root = component.root;
		let span = root.findByType("span");
		span.props.onDoubleClick();
		let input = root.findByType("input");
		expect(input.props.value).toBe("it-kamasutra.com");
	});

	test("callback should be called", () => {
		const mockCallback = jest.fn();
		const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />);
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);//Спрашиваем сколько меня вызвали
	});

});